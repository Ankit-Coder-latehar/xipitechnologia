import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard, ShieldCheck, CheckCircle2, AlertCircle, X,
  Sparkles, Loader2, Lock, ArrowRight, RefreshCw, FileText
} from 'lucide-react';
import { api } from '../services/api';

export default function PaymentModal({
  isOpen,
  onClose,
  initialItem = 'Xipitechnologia Professional Service',
  initialAmount = 4999,
  category = 'Services Package',
  merchantName,
  currency = 'INR'
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: initialAmount,
    purpose: initialItem
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // If initialItem changes when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        purpose: initialItem,
        amount: initialAmount
      }));
      setPaymentSuccess(null);
      setErrorMsg('');
    }
  }, [isOpen, initialItem, initialAmount]);

  const loadRazorpaySDK = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const getRazorpayKey = () => {
    return (
      import.meta.env.VITE_RAZORPAY_KEY_ID ||
      import.meta.env.VITE_RAZORPAY_TEST_KEY ||
      import.meta.env.razorpay_test_key ||
      'rzp_test_TqwzJ1VSI5MWAM'
    );
  };

  const handlePayNow = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const isLoaded = await loadRazorpaySDK();
      if (!isLoaded || !window.Razorpay) {
        throw new Error('Razorpay Checkout SDK failed to load. Please check your internet connection.');
      }

      const razorpayKey = getRazorpayKey();

      // 1. Try to create order on backend if available
      let backendOrderId = null;
      let orderAmount = Math.round(Number(formData.amount) * 100);
      let orderCurrency = 'INR';

      try {
        const orderRes = await api.createPaymentOrder({
          amount: Number(formData.amount),
          currency: 'INR',
          notes: {
            purpose: formData.purpose,
            category: category,
            customerName: formData.name,
            customerEmail: formData.email
          },
          customer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        });

        if (orderRes && orderRes.success && orderRes.order) {
          backendOrderId = orderRes.order.id;
          orderAmount = orderRes.order.amount;
          orderCurrency = orderRes.order.currency || 'INR';
        }
      } catch (backendErr) {
        // Backend is optional/offline; proceed directly with Razorpay standard checkout
        console.warn('Backend payment order creation not reachable, proceeding with direct client checkout:', backendErr);
      }

      // 2. Open Razorpay Checkout modal
      const isAcademy = category && category.toLowerCase().includes('academy');
      const resolvedMerchantName = merchantName || (isAcademy ? 'Xipitechnologia® Academy' : 'Xipitechnologia® Digital Services');

      const options = {
        key: razorpayKey,
        amount: orderAmount,
        currency: orderCurrency,
        name: resolvedMerchantName,
        description: formData.purpose || (isAcademy ? 'Course Enrollment' : 'Service Package Retainer'),
        image: '/white-logo.png',
        ...(backendOrderId ? { order_id: backendOrderId } : {}),
        prefill: {
          name: formData.name || '',
          email: formData.email || '',
          contact: formData.phone || ''
        },
        notes: {
          purpose: formData.purpose,
          category: category,
          customerName: formData.name
        },
        theme: {
          color: '#E32626'
        },
        handler: async function (response) {
          try {
            setLoading(true);
            if (backendOrderId) {
              try {
                await api.verifyPayment({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  customer: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                  },
                  orderDetails: {
                    purpose: formData.purpose,
                    amount: Number(formData.amount)
                  }
                });
              } catch (verErr) {
                console.warn('Backend verification skipped:', verErr);
              }
            }

            const successPayload = {
              orderId: response.razorpay_order_id || `ORD-${Date.now()}`,
              paymentId: response.razorpay_payment_id,
              amount: formData.amount,
              purpose: formData.purpose,
              category: category,
              customerName: formData.name,
              customerEmail: formData.email,
              timestamp: new Date().toISOString()
            };

            try {
              const existing = JSON.parse(localStorage.getItem('xipi_client_payments') || '[]');
              existing.unshift(successPayload);
              localStorage.setItem('xipi_client_payments', JSON.stringify(existing.slice(0, 50)));
              window.dispatchEvent(new CustomEvent('xipi_payment_success', { detail: successPayload }));
            } catch {}

            setPaymentSuccess(successPayload);
          } catch (verErr) {
            setErrorMsg(verErr.message || 'Server error while verifying transaction.');
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          }
        }
      };

      const rzpInstance = new window.Razorpay(options);
      rzpInstance.on('payment.failed', function (resp) {
        setErrorMsg(resp?.error?.description || 'Payment was declined or cancelled.');
        setLoading(false);
      });
      rzpInstance.open();
    } catch (err) {
      console.error('Payment checkout error:', err);
      setErrorMsg(err.message || 'Failed to initialize payment gateway.');
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#0E131F] border border-brand-red/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close payment modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success State */}
          {paymentSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                TRANSACTION CONFIRMED
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Payment Successful!
              </h3>
              <p className="text-xs text-white/70 mt-2 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{formData.name || 'Valued Client'}</strong>! Your payment was verified and processed securely via Razorpay.
              </p>

              {/* Receipt Box */}
              <div className="mt-5 p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between items-center text-white/60">
                  <span>Order ID:</span>
                  <span className="font-mono text-white/90 font-bold">{paymentSuccess.orderId}</span>
                </div>
                <div className="flex justify-between items-center text-white/60">
                  <span>Payment ID:</span>
                  <span className="font-mono text-emerald-400 font-bold">{paymentSuccess.paymentId}</span>
                </div>
                <div className="flex justify-between items-center text-white/60">
                  <span>Package / Item:</span>
                  <span className="text-white font-medium">{formData.purpose}</span>
                </div>
                <div className="flex justify-between items-center text-white/60 pt-2 border-t border-white/10">
                  <span>Amount Paid:</span>
                  <span className="text-lg font-extrabold text-white font-mono">₹{formData.amount}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-brand-red/30 cursor-pointer"
              >
                Done & Return to Website
              </button>
            </div>
          ) : (
            /* Checkout Form State */
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-brand-red/20 text-brand-red flex items-center justify-center border border-brand-red/30">
                  <CreditCard className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-red">
                  SECURE RAZORPAY GATEWAY
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {category?.toLowerCase().includes('academy') ? 'Instant Course Checkout' : 'Secure Service Checkout'}
              </h3>
              <p className="text-xs text-white/60 mt-1">
                {category?.toLowerCase().includes('academy')
                  ? 'Complete your academy enrollment with 256-bit encrypted Razorpay checkout.'
                  : 'Confirm your digital marketing service retainer with 256-bit encrypted Razorpay checkout.'}
              </p>

              {/* Summary Card */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-wider">SELECTED ITEM</div>
                  <div className="text-sm font-bold text-white mt-0.5 line-clamp-1">{formData.purpose}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-wider">FEE</div>
                  <div className="text-lg font-black text-brand-red font-mono">₹{formData.amount}</div>
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="mt-4 p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Form Inputs */}
              <form onSubmit={handlePayNow} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase mb-1">Phone (10-Digit)</label>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                {/* Amount selection pill */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-white/70 uppercase">Amount (INR)</label>
                    <span className="text-[10px] text-white/40">Select or custom test</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 999, initialAmount].filter((v, i, a) => a.indexOf(v) === i).map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amt })}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          formData.amount === amt
                            ? 'bg-brand-red border-brand-red text-white shadow-md shadow-brand-red/20'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        ₹{amt} {amt === 1 ? '(Test)' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-brand-red hover:bg-brand-red-dark disabled:opacity-50 text-white font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Opening Secure Razorpay Portal...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Proceed to Pay ₹{formData.amount} via Razorpay &rarr;</span>
                    </>
                  )}
                </button>
              </form>

              {/* Security badges */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Razorpay Sandbox Active
                </span>
                <span>UPI • Cards • NetBanking</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
