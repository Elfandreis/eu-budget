import {useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
export const Stars = () => {
  const [animate, setAnimate] = useState(false);
  const controlsStar = useAnimation();

  function shuffleArray(array): Array<number> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 0 ? setAnimate(true) : setAnimate(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const array = shuffleArray(items);
    animate
      ? controlsStar.start((i) => {
          const index = array.indexOf(i);
          return {
            x: index * 83.3 - 450,
            rotate: i * 30,
            opacity: 0.1 * i,
            scale: index / 10 + 1,
            transition: {ease: 'easeInOut'},
          };
        })
      : controlsStar.start((i) => ({
          opacity: 1,
          rotate: 0,
          x: 0 + 140 * Math.cos((2 * Math.PI * i) / 12),
          y: 0 + 140 * Math.sin((2 * Math.PI * i) / 12),
          scale: 1,
        }));
  }, [animate]);
  return (
    <div className="relative w-full text-yellow-500 bg-blue-500 fill-current rounded-xl ">
      <motion.svg viewBox="0 0 1000 500">
        <motion.g transform="translate(500,250)">
          {[...Array(12)].map((_, i) => {
            return (
              <motion.path
                custom={i}
                layoutId={i.toString()}
                x={0 + 140 * Math.cos((2 * Math.PI * i) / 12)}
                y={0 + 140 * Math.sin((2 * Math.PI * i) / 12)}
                animate={controlsStar}
                key={i}
                transition={{ease: 'easeInOut', duration: 0.5}}
                d="m13 22.12-13.81-10.36-14.41 10.29 5.59-16.33-14.23-10.53 17.25.27 5.61-16.79 5.09 16.49 17.7.15-14.12 9.93 5.33 16.88z"
              />
            );
          })}
        </motion.g>
      </motion.svg>
    </div>
  );
};
