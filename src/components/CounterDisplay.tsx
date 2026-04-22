import React from 'react';

interface CounterDisplayProps {
  count: number;
}

export function CounterDisplay({ count }: CounterDisplayProps) {
  return (
    <div className="font-display font-bold text-[120px] md:text-[200px] leading-none tracking-tighter text-on-surface select-none"
      style={{ textShadow: '0 12px 48px rgba(70, 72, 212, 0.1)' }}>
      {count}
    </div>
  );
}
