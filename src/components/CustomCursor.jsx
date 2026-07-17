import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const addHoverListeners = () => {
      // Find buttons, links, clickable actions
      const hoverElements = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .hover-cursor-expand');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorType('hover'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });

      // Find crosshair elements (like navbar area or custom panels)
      const crossElements = document.querySelectorAll('[data-cursor="cross"]');
      crossElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorType('cross'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });
    };

    // Run initially
    addHoverListeners();

    // Re-bind when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`custom-cursor hidden md:block ${
        cursorType === 'hover' 
          ? 'custom-cursor-hover' 
          : cursorType === 'cross' 
          ? 'custom-cursor-cross' 
          : ''
      }`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
