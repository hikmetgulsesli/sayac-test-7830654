import { useState, useCallback, useEffect } from 'react';
import { Theme } from '../types';
import { getItem, setItem } from '../utils/storage';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    getItem<Theme>('theme', 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return {
    theme,
    toggleTheme,
  };
}
