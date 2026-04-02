import React, { useState, useEffect } from 'react';

export default function MobileWarning() {
  // Compute initial state synchronously to prevent flashing
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    
    // Check if the browser identifies as a mobile device.
    // "Desktop Site" mode spoofs the UserAgent to Macintosh/Windows, making this false.
    const isMobileUA = /Mobi|Android|iPhone|iPod/i.test(navigator.userAgent);
    
    // Only block if it is an actual physical mobile device AND the screen is small.
    // This allows "Desktop Site" mode to bypass the block, and prevents real desktops
    // with narrow windows from being locked out.
    return isMobileUA && window.innerWidth < 1024;
  });

  useEffect(() => {
    const handler = () => {
      const isMobileUA = /Mobi|Android|iPhone|iPod/i.test(navigator.userAgent);
      setShow(isMobileUA && window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Lock scroll when visible
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

