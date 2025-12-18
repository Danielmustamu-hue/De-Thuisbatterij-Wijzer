
import React, { useState, useEffect } from 'react';

interface FloatingCTAProps {
  onClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-[100] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-50 pointer-events-none'}`}>
      <button
        onClick={onClick}
        className="group relative flex items-center bg-[#1A202C] text-white p-1 pl-6 rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:bg-[#48BB78] transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/10"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.15em] mr-4">Check Besparing</span>
        <div className="w-12 h-12 bg-[#48BB78] group-hover:bg-white group-hover:text-[#48BB78] rounded-full flex items-center justify-center transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#48BB78] opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
        
        {/* Floating Tooltip */}
        <div className="absolute -top-14 right-0 bg-white text-[#1A202C] text-[10px] font-bold py-2.5 px-5 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all whitespace-nowrap border border-gray-100 pointer-events-none">
          Weten wat jij bespaart? ⚡️
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingCTA;
