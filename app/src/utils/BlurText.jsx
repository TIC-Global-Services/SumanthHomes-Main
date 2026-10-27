import { motion, useInView } from 'motion/react';
import React, { useRef, useMemo, forwardRef } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = forwardRef(({
  text = '',
  delay = 50,
  className = '',
  style = {},
  animateBy = 'all', // Reveal fully all at once
  direction = 'bottom',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  animationFrom = undefined,
  animationTo = undefined,
  easing = t => t,
  onAnimationComplete = undefined,
  stepDuration = 0.35,
  once = true,
  as = 'p',
}, forwardedRef) => {
  const internalRef = useRef(null);

  const setRef = (node) => {
    internalRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  // Triggers precisely when the user scrolls to that section
  const isInView = useInView(internalRef, {
    once,
    amount: threshold,
    margin: rootMargin,
  });

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(6px)', opacity: 0, y: -20 }
        : { filter: 'blur(6px)', opacity: 0, y: 20 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(2px)',
        opacity: 0.6,
        y: direction === 'top' ? 2 : -2,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));
  const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

  // If explicitly configured for letter-by-letter
  if (animateBy === 'letters') {
    const letters = (text || '').split('');
    return (
      <p ref={setRef} className={className} style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
        {letters.map((char, index) => {
          const spanTransition = {
            duration: totalDuration,
            times,
            delay: (index * Math.min(delay, 50)) / 1000,
            ease: easing,
          };

          return (
            <motion.span
              className="inline-block will-change-[transform,filter,opacity]"
              key={index}
              initial={fromSnapshot}
              animate={isInView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={index === letters.length - 1 ? onAnimationComplete : undefined}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          );
        })}
      </p>
    );
  }

  // Fully revealed all at once with a small initial delay (no word-by-word delay)
  const initialDelay = delay ? Math.min(delay, 100) / 1000 : 0.05;

  const transition = {
    duration: totalDuration,
    times,
    delay: initialDelay,
    ease: easing,
  };

  const Component = as === 'div' ? motion.div : as === 'span' ? motion.span : motion.p;

  return (
    <Component
      ref={setRef}
      className={className}
      style={{ ...style }}
      initial={fromSnapshot}
      animate={isInView ? animateKeyframes : fromSnapshot}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
    >
      {text}
    </Component>
  );
});

BlurText.displayName = 'BlurText';

export default BlurText;
