import { useState } from 'react';

const Bell = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

export default function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const alerts = [
    'New healthy snack recommendations added',
    'Your saved item is now available locally',
  ];

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Notifications">
        <Bell />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-xl rounded-xl border border-gray-200 z-50">
          <div className="px-4 py-3 border-b font-semibold">Notifications</div>
          <ul className="max-h-64 overflow-auto">
            {alerts.map((a, i) => (
              <li key={i} className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">{a}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
