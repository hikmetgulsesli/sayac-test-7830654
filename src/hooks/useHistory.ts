import { useState, useCallback, useEffect } from 'react';
import { HistoryEntry } from '../types';
import { getItem, setItem } from '../utils/storage';
import { generateId } from './useCounter';

const HISTORY_KEY = 'history';
const MAX_HISTORY = 10;

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(() =>
    getItem<HistoryEntry[]>(HISTORY_KEY, [])
  );

  useEffect(() => {
    setItem(HISTORY_KEY, history);
  }, [history]);

  const addEntry = useCallback(
    (value: number, action: HistoryEntry['action']) => {
      const entry: HistoryEntry = {
        id: generateId(),
        value,
        timestamp: Date.now(),
        action,
      };
      setHistory((prev) => {
        const updated = [entry, ...prev];
        return updated.slice(0, MAX_HISTORY);
      });
    },
    []
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
    setItem(HISTORY_KEY, []);
  }, []);

  return {
    history,
    addEntry,
    clearHistory,
  };
}
