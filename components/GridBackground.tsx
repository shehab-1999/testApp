"use client";

import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="w-full h-full opacity-20"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default GridBackground;