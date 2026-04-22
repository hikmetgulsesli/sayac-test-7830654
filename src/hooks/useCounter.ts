import { useState, useCallback } from 'react';
import { getItem, setItem } from '../utils/storage';

const COUNT_KEY = 'count';

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function useCounter() {
  const [count, setCount] = useState<number>(() => getItem<number>(COUNT_KEY, 0));

  const increment = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1;
      setItem(COUNT_KEY, next);
      return next;
    });
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => {
      const next = prev - 1;
      setItem(COUNT_KEY, next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setItem(COUNT_KEY, 0);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export type { HistoryEntry } from '../types';
export { generateId };
