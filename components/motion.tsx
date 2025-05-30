"use client";

import { useState, useEffect } from 'react';

type MotionProps = {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
  style?: React.CSSProperties;
};

export const motion = {
  div: ({ children, initial, animate, transition, className, style }: MotionProps) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    // Calculate the final style based on isMounted state
    const finalStyle = isMounted
      ? { 
          ...style,
          ...animate,
          transition: transition ? 
            `all ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s` : 
            'all 0.3s ease'
        }
      : { 
          ...style,
          ...initial,
          opacity: initial?.opacity !== undefined ? initial.opacity : 0
        };
        
    return (
      <div className={className} style={finalStyle}>
        {children}
      </div>
    );
  },
  
  h1: ({ children, initial, animate, transition, className, style }: MotionProps) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    const finalStyle = isMounted
      ? { 
          ...style,
          ...animate,
          transition: transition ? 
            `all ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s` : 
            'all 0.3s ease'
        }
      : { 
          ...style,
          ...initial,
          opacity: initial?.opacity !== undefined ? initial.opacity : 0
        };
        
    return (
      <h1 className={className} style={finalStyle}>
        {children}
      </h1>
    );
  },
  
  h2: ({ children, initial, animate, transition, className, style }: MotionProps) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    const finalStyle = isMounted
      ? { 
          ...style,
          ...animate,
          transition: transition ? 
            `all ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s` : 
            'all 0.3s ease'
        }
      : { 
          ...style,
          ...initial,
          opacity: initial?.opacity !== undefined ? initial.opacity : 0
        };
        
    return (
      <h2 className={className} style={finalStyle}>
        {children}
      </h2>
    );
  },
};