interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function CounterControls({ onIncrement, onDecrement, onReset }: CounterControlsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <button
        onClick={onDecrement}
        aria-label="Azalt"
        className="bg-surface outline outline-1 outline-outline-variant/20 text-on-surface rounded-md px-6 py-4 flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(23,28,35,0.03)] w-48 md:w-auto cursor-pointer"
      >
        <span className="material-symbols-outlined">remove</span>
        <span className="font-label font-medium">Azalt</span>
      </button>
      <button
        onClick={onReset}
        aria-label="Sıfırla"
        className="bg-surface outline outline-1 outline-outline-variant/20 text-on-surface-variant rounded-md px-6 py-4 flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(23,28,35,0.03)] w-48 md:w-auto cursor-pointer"
      >
        <span className="material-symbols-outlined">restart_alt</span>
        <span className="font-label font-medium">Sıfırla</span>
      </button>
      <button
        onClick={onIncrement}
        aria-label="Arttır"
        className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full px-10 py-5 flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-[0.98] transition-all shadow-[0_12px_32px_-8px_rgba(70,72,212,0.4)] w-56 md:w-auto cursor-pointer"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        <span className="font-label font-semibold text-lg tracking-wide">Arttır</span>
      </button>
    </div>
  );
}