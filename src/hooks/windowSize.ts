// BASE MODULES
import { useLayoutEffect, useState } from 'react';

// CUSTOM MODULES

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<number>(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
