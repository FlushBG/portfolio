import { MotionValue, useTransform } from 'framer-motion';

const useParallax = (
  value: MotionValue<number>,
  outputRange: number[]
) => {
  return useTransform(value, [0, 1], outputRange);
};

export default useParallax;
