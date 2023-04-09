import { useEffect, useState } from 'react';

type ScreenSizeType = { innerWidth: number; innerHeight: number };

export const useResize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>();

  useEffect(() => {
    const resizeHandler = () => {
      setScreenSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return screenSize;
};
