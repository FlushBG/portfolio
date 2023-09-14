import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import useScreenSizeDetection from '@/hooks/useScreenSizeDetection';
import LoadingScreen from './LoadingScreen';

const Preloads = ({ children }: PropsWithChildren) => {
  const { detectScreenSize, isReady } = useScreenSizeDetection();

  useEffect(() => {
    detectScreenSize();
    window.addEventListener('resize', () => detectScreenSize());

    return () => {
      window.removeEventListener('resize', () => detectScreenSize());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAppReady = useMemo((): boolean => {
    return isReady;
  }, [isReady]);

  return isAppReady ? <>{children}</> : <LoadingScreen />;
};

export default Preloads;
