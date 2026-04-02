import React, { useState, useEffect } from 'react';

/**
 * MobileWarning
 *
 * Pure JS detection — no CSS breakpoints — so it correctly handles:
 *   • Portrait phones   (always shown)
 *   • Landscape phones  (still shown — site layout breaks in landscape too)
 *   • Tablets ≥ 768px   (hidden — layout works acceptably)
 *   • Desktop           (hidden — zero impact)
 *   • Device rotation   (re-evaluates on every resize event)
 *
 * The threshold is 1024px (lg) because the sidebar + content requires at
 * least ~1000px to render correctly.
 */

const BREAKPOINT = 1024;

export default function MobileWarning() {
  // Initialise synchronously so there is ZERO flash of content on mobile
  const [show, setShow] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < BREAKPOINT
  );

  useEffect(() => {
    const handler = () => setShow(window.innerWidth < BREAKPOINT);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Prevent the page behind from scrolling while the overlay is visible
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Desktop required"
    >
      <div className="w-full max-w-[280px] flex flex-col items-center text-center">

        {/* Logo */}
        <p className="text-2xl font-bold tracking-tight text-white mb-12">
          Stellar.
        </p>

        {/* Heading */}
        <h2 className="text-white text-xl font-semibold tracking-tight mb-4">
          Desktop Required
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          This application was designed for desktop viewing. Please open it
          on a laptop or desktop browser for the full experience.
        </p>

        {/* Hint box */}
        <div className="w-full border border-border rounded px-5 py-4 text-xs text-gray-600 leading-relaxed">
          Tap your browser menu and enable{' '}
          <span className="text-gray-400 font-medium">Desktop Site</span>{' '}
          to continue on this device.
        </div>

      </div>
    </div>
  );
}

