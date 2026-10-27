import React from 'react';

export interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  animateBy?: 'words' | 'letters' | 'lines' | 'all';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Array<Record<string, any>> | Record<string, any>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  once?: boolean;
}

declare const BlurText: React.ForwardRefExoticComponent<
  BlurTextProps & React.RefAttributes<HTMLParagraphElement>
>;

export default BlurText;
