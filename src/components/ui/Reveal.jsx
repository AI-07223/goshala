import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, delay = 0, width = "100%" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });

  return (
    <div ref={ref} style={{ width, position: 'relative' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
