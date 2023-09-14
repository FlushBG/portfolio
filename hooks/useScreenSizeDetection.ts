import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const isMobileState = atom<boolean | null>({ key: 'mobile_state', default: null });

const useScreenSizeDetection = () => {
  const isMobile = useRecoilValue(isMobileState);
  const setIsMobile = useSetRecoilState(isMobileState);

  const detectScreenSize = () => {
    const matchResult = window.matchMedia('(max-width: 767.98px)');
    setIsMobile(matchResult.matches);
  };

  return {
    isMobile,
    isScreenReady: isMobile !== null,
    detectScreenSize,
  };
};

export default useScreenSizeDetection;
