import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const CountUpStats = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    // Parse the end value if it's a string (e.g. "150+")
    const endValue = parseInt(end.toString().replace(/\D/g, ''));
    if (isNaN(endValue)) return;

    const totalFrames = Math.round(duration * 60);
    const counterIncrement = endValue / totalFrames;

    const timer = setInterval(() => {
      start += counterIncrement;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix || (end.toString().includes('+') ? '+' : '')}
    </span>
  );
};

export default CountUpStats;
