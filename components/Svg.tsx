import * as React from 'react';
import {motion, useTransform, useViewportScroll} from 'framer-motion';

const SvgComponent = (props) => {
  const {scrollY} = useViewportScroll();
  return (
    <svg viewBox="0 0 1000 500" className="flex items-center justify-center">
      <motion.g
        initial={{x: 500, y: 250}}
        style={{
          x: useTransform(scrollY, [0, 200], [500, 0]),
          y: useTransform(scrollY, [0, 200], [250, 490]),
        }}
      >
        {[...Array(12)].map((_, i) => {
          return (
            <motion.path
              layoutId={i.toString()}
              initial={{
                x: 0 + 135 * Math.cos((2 * Math.PI * i) / 12),
                y: 0 + 135 * Math.sin((2 * Math.PI * i) / 12),
              }}
              style={{
                x: useTransform(
                  scrollY,
                  [0, 200],
                  [135 * Math.cos((2 * Math.PI * i) / 12), i * 83 + 36]
                ),
                y: useTransform(
                  scrollY,
                  [0, 200],
                  [135 * Math.sin((2 * Math.PI * i) / 12), 0]
                ),
                color: useTransform(
                  scrollY,
                  [0, 100, 200],
                  ['#FFCC00', '#003399', '#000']
                ),
              }}
              key={i}
              d="m11.68 11.12-13.81-10.36-14.41 10.29 5.59-16.33-14.23-10.53 17.25.27 5.61-16.79 5.09 16.49 17.7.15-14.12 9.93 5.33 16.88z"
            />
          );
        })}
      </motion.g>
    </svg>
  );
};
export default SvgComponent;
