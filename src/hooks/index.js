import { useEffect, useRef } from 'react';

/**
 * Extends React's `useEffect` hook to avoid invoking the callback on the
 * initial render.
 * @param {Callback function} cb 
 * @param {Dependency array} deps 
 */
export const useDidMountEffect = (cb, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) cb();
    else didMount.current = true;
  }, [...deps])
}
