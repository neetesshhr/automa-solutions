import React from "react";

const Logo: React.FC<{ className?: string }>= ({ className }) => {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="ezg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6f66ff" />
            <stop offset="100%" stopColor="#9b8aff" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ezg)" strokeWidth="2" fill="none" />
        <path d="M7 9h6M7 15h10" stroke="url(#ezg)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-semibold">effectzero</span>
    </span>
  );
};

export default Logo;
