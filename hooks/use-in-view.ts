"use client";

import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  /**
   * The root element to use as the viewport for checking visibility
   */
  root?: Element | null;
  
  /**
   * Margin around the root. Can have values similar to the CSS margin property
   */
  rootMargin?: string;
  
  /**
   * Either a single number or an array of numbers between 0.0 and 1.0
   */
  threshold?: number | number[];
  
  /**
   * Only trigger the observer once
   */
  once?: boolean;
}

/**
 * React hook that tracks whether an element is in the viewport
 */
export function useInView(
  elementRef: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { root = null, rootMargin = '0px', threshold = 0, once = false } = options;

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        setIsInView(isElementInView);

        if (isElementInView && once && element) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, root, rootMargin, threshold, once]);

  return isInView;
}