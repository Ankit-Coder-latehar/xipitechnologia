import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import https from 'node:https'
import crypto from 'node:crypto'

function razorpayDevPlugin() {
  return {
    name: 'razorpay-dev-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Handle /api/payment/create-order
        if (req.method === 'POST' && req.url === '/api/payment/create-order') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const env = loadEnv('development', process.cwd(), ['VITE_', 'razorpay_', 'RAZORPAY_']);
              const keyId = env.VITE_RAZORPAY_KEY_ID || env.razorpay_test_key || 'rzp_test_TqwzJ1VSI5MWAM';
              const keySecret = env.VITE_RAZORPAY_SECRET_KEY || env.razorpay_secret_key || 'C0XOIHgwsk0VMvlBg3YC26CM';

              const amountInPaise = Math.round(Number(parsed.amount || 4999) * 100);
              const orderData = JSON.stringify({
                amount: amountInPaise,
                currency: parsed.currency || 'INR',
                receipt: 'rcpt_' + Date.now().toString().slice(-8),
                notes: parsed.notes || {}
              });

              const auth = Buffer.from(`${keyId.trim()}:${keySecret.trim()}`).toString('base64');
              const razorpayReq = https.request({
                hostname: 'api.razorpay.com',
                path: '/v1/orders',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ' + auth
                }
              }, (razorpayRes) => {
                let rzpBody = '';
                razorpayRes.on('data', d => { rzpBody += d; });
                razorpayRes.on('end', () => {
                  res.setHeader('Content-Type', 'application/json');
                  try {
                    const rzpParsed = JSON.parse(rzpBody);
                    if (razorpayRes.statusCode >= 200 && razorpayRes.statusCode < 300) {
                      res.statusCode = 200;
                      res.end(JSON.stringify({
                        success: true,
                        key: keyId.trim(),
                        order: rzpParsed
                      }));
                    } else {
                      res.statusCode = razorpayRes.statusCode;
                      res.end(JSON.stringify({
                        success: false,
                        message: rzpParsed?.error?.description || 'Razorpay order creation failed'
                      }));
                    }
                  } catch (e) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ success: false, message: 'Parse error from Razorpay' }));
                  }
                });
              });

              razorpayReq.on('error', (err) => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: err.message }));
              });

              razorpayReq.write(orderData);
              razorpayReq.end();
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Invalid request payload' }));
            }
          });
          return;
        }

        // Handle /api/payment/verify-payment
        if (req.method === 'POST' && req.url === '/api/payment/verify-payment') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = JSON.parse(body || '{}');
              const env = loadEnv('development', process.cwd(), ['VITE_', 'razorpay_', 'RAZORPAY_']);
              const keySecret = (env.VITE_RAZORPAY_SECRET_KEY || env.razorpay_secret_key || 'C0XOIHgwsk0VMvlBg3YC26CM').trim();

              if (razorpay_order_id && razorpay_payment_id && razorpay_signature) {
                const generated = crypto
                  .createHmac('sha256', keySecret)
                  .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                  .digest('hex');

                const isValid = generated === razorpay_signature;
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = isValid ? 200 : 400;
                res.end(JSON.stringify({
                  success: isValid,
                  message: isValid ? 'Signature verified' : 'Invalid signature',
                  data: {
                    orderId: razorpay_order_id,
                    paymentId: razorpay_payment_id
                  }
                }));
                return;
              }

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                message: 'Payment recorded',
                data: {
                  orderId: razorpay_order_id || 'ORD-' + Date.now(),
                  paymentId: razorpay_payment_id || 'PAY-' + Date.now()
                }
              }));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: err.message }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), razorpayDevPlugin()],
  envPrefix: ['VITE_', 'razorpay_', 'RAZORPAY_', 'SUPABASE_'],
  server: {
    proxy: {
      '/api/auth': { target: 'http://localhost:5000', changeOrigin: true },
      '/api/blogs': { target: 'http://localhost:5000', changeOrigin: true },
      '/wp-json': {
        target: 'https://theproplog.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
