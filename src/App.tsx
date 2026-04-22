import { CounterDisplay } from './components/CounterDisplay';
import { CounterControls } from './components/CounterControls';
import { HistoryPanel } from './components/HistoryPanel';
import { ThemeToggle } from './components/ThemeToggle';
import { useCounter } from './hooks/useCounter';
import { useHistory } from './hooks/useHistory';
import { useTheme } from './hooks/useTheme';
import './index.css';

export function App() {
  const { count, increment, decrement, reset } = useCounter();
  const { history, addEntry } = useHistory();
  const { theme, toggleTheme } = useTheme();

  const handleIncrement = () => {
    increment();
    addEntry(count + 1, 'increment');
  };

  const handleDecrement = () => {
    decrement();
    addEntry(count - 1, 'decrement');
  };

  const handleReset = () => {
    reset();
    addEntry(0, 'reset');
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body flex flex-col antialiased">
      <header className="sticky top-0 z-50 bg-surface flex justify-between items-center w-full px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tighter text-primary font-headline">
          Kinetik Sayaç
        </h1>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="flex-1 flex flex-col w-full md:pr-64 relative">
        <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] bg-primary-fixed/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
          <div className="flex flex-col items-center justify-center gap-16 md:gap-24">
            <CounterDisplay count={count} />
            <CounterControls
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onReset={handleReset}
            />
          </div>
        </div>
      </main>

      <HistoryPanel history={history} />
    </div>
  );
}
