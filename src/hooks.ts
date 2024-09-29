import { useEffect, useState } from 'react';

/**
 * Custom hook to throttle the value of an input.
 * @param input The input value to be throttled.
 * @param delay The delay in milliseconds between updates.
 * @returns The throttled input value.
 */
export function useThrottledValue<T>(input: T, delay: number): T {
  const [throttledInput, setThrottledInput] = useState<T>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setThrottledInput(input);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [input, delay]);
  return throttledInput;
}
