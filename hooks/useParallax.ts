import { MotionValue, useTransform } from 'framer-motion';

const useParallax = (value: MotionValue<number>, outputRange: string[]) => {
  return useTransform<number, string>(value, [0, 1], outputRange);
};

export default useParallax;
