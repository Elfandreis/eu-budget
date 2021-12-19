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

const SelectedCard = ({selected, setSelected}) => {
  const icon =
    selected !== null && React.createElement(MaterialDesign[selected.icon]);
  const optionIcon =
    selected !== null && React.createElement(MaterialDesign[selected.icon]);
  return (
    <AnimatePresence exitBeforeEnter>
      {selected && (
        <>
          <motion.div
            className="absolute w-full h-full pointer-events-none backdrop-grayscale backdrop-blur-sm"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          ></motion.div>

          <motion.div
            key={selected.title}
            layoutId={selected.title + 'id'}
            onClick={() => setSelected(null)}
            transition={{ease: 'easeInOut', duration: 0.3}}
            className="absolute inset-0 flex flex-col justify-center h-64 gap-1 p-4 m-auto w-80 rounded-xl "
            style={{backgroundColor: selected.color}}
          >
            <motion.div
              layoutId={selected.title + 'expand'}
              transition={{delay: 0.1, ease: 'easeInOut'}}
              className="flex items-center w-full h-20 gap-3 p-4 mb-2 text-gray-200 bg-gray-100 rounded-xl bg-opacity-20 text-7xl"
            >
              {icon}
              <motion.h2
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className="text-2xl font-bold text-center text-gradient bg-gradient-to-r from-gray-100 to-gray-300"
              >
                {selected.value}
              </motion.h2>
            </motion.div>
            {selected.options.map((option) => (
              <motion.div
                key={option}
                className="flex flex-row items-center gap-3 "
              >
                <motion.figure className="text-gray-100">
                  {optionIcon}
                </motion.figure>
                <motion.h3 className="text-sm text-white opacity-80">
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

export default SelectedCard;
