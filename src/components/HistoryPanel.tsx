import { HistoryEntry } from '../types';
import { formatTime } from '../utils/time';

interface HistoryPanelProps {
  history: HistoryEntry[];
}

interface HistoryItemData {
  label: string;
  valueChange: string;
  timestamp: string;
  isPositive?: boolean;
}

function getActionLabel(action?: HistoryEntry['action']): string {
  switch (action) {
    case 'increment': return 'Artırma';
    case 'decrement': return 'Azaltma';
    case 'reset': return 'Sıfırlama';
    default: return 'İşlem';
  }
}

export function HistoryPanel({ history }: HistoryPanelProps) {
  const items: HistoryItemData[] = history.map((entry, index) => {
    const prevValue = index < history.length - 1 ? history[index + 1].value : undefined;
    const valueChange = prevValue !== undefined ? `${prevValue} → ${entry.value}` : `- → ${entry.value}`;
    return {
      label: getActionLabel(entry.action),
      valueChange,
      timestamp: formatTime(entry.timestamp),
      isPositive: entry.action === 'increment',
    };
  });

  return (
    <aside className="hidden md:flex fixed right-0 top-0 h-full w-64 z-40 flex-col pt-20 bg-surface-container-lowest border-l-0 shadow-[0_0_40px_rgba(23,28,35,0.04)]">
      {/* Navigation Tabs */}
      <nav className="flex flex-col mb-10 gap-1 px-2">
        <a
          className="bg-primary-fixed/40 text-on-primary-fixed rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 font-label font-medium text-sm tracking-wide transition-transform active:scale-98 cursor-pointer"
          href="#"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          Sayaç
        </a>
        <a
          className="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 font-label font-medium text-sm tracking-wide cursor-pointer"
          href="#"
        >
          <span className="material-symbols-outlined">settings</span>
          Ayarlar
        </a>
      </nav>

      {/* History Header */}
      <div className="px-6 mb-5">
        <h2 className="font-headline font-bold text-xl tracking-tight text-on-surface">Geçmiş</h2>
        <p className="font-body text-sm text-on-surface-variant mt-1">İşlem kayıtları</p>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto px-4 pb-8 flex flex-col gap-4">
        {items.length === 0 ? (
          <div className="text-on-surface-variant text-sm font-body px-2">Henüz işlem yok</div>
        ) : (
          items.map((item) => (
            <div
              key={item.timestamp}
              className={`p-4 rounded-xl flex flex-col gap-1.5 outline outline-1 shadow-sm ${
                item.isPositive
                  ? 'bg-surface outline-outline-variant/10'
                  : 'bg-surface-container-low outline-outline-variant/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-label font-semibold text-sm ${item.isPositive ? 'text-tertiary' : 'text-on-surface'}`}>
                  {item.label}
                </span>
                <span className="font-headline font-bold text-xs text-on-surface-variant tracking-widest">
                  {item.valueChange}
                </span>
              </div>
              <div className="font-body text-xs text-outline mt-0.5">{item.timestamp}</div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}