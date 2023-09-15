
import { useState, useEffect } from 'react';

const useWindows = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.screen.width,
    height: window.screen.height,
    resolution: `${ window.innerWidth}x${ window.innerHeight}`,
    isMobile: window.innerWidth < 768,
    isLaptop:  window.innerWidth >= 768
    // /Mac|iPad|iPhone|iPod|Android/.test(navigator.userAgent),

  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.screen.width,
        height: window.screen.height,
        resolution: `${ window.innerWidth}x${ window.innerHeight}`,
        isMobile: window.innerWidth < 768,
        isLaptop:  window.innerWidth >= 768
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useWindows;
