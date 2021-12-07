import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
const draw = {
  hidden: {pathLength: 0, opacity: 0},
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {type: 'spring', duration: 5, bounce: 0},
      opacity: {duration: 0.01},
    },
  },
};
import * as MaterialDesign from 'react-icons/md';

const FramerContainer = ({selected, setSelected}) => {
  const icon =
    selected !== null && React.createElement(MaterialDesign[selected.icon]);
  const optionIcon =
    selected !== null && React.createElement(MaterialDesign[selected.icon]);
  return (
    <AnimatePresence exitBeforeEnter>
      {selected && (
        <>
          <motion.div
            className="absolute w-full h-full backdrop-grayscale backdrop-blur-sm"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          ></motion.div>

          <motion.div
            key={selected.title}
            layoutId={selected.title + 'id'}
            onClick={() => setSelected(null)}
            className="absolute inset-0 flex flex-col w-64 h-64 p-3 m-auto rounded-lg "
            style={{backgroundColor: selected.color}}
          >
            <motion.div className="flex items-center w-full h-32 text-gray-200 text-7xl">
              {icon}
              <motion.h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-gray-100 to-gray-300">
                {selected.value}
              </motion.h2>
            </motion.div>

            {selected.options.map((option, i) => (
              <motion.div
                key={option}
                className="flex flex-row items-center gap-3"
              >
                <div className={'text-gray-100'}>{optionIcon}</div>
                <motion.h3 className="text-sm font-semibold text-white opacity-70">
                  {option}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FramerContainer;
