import React from 'react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Tema Değiştir"
      className="text-on-surface-variant hover:bg-surface-variant/50 p-2.5 rounded-full transition-colors active:scale-95 duration-150 ease-in-out cursor-pointer"
    >
      <span className="material-symbols-outlined">light_mode</span>
    </button>
  );
}
