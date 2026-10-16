import React from 'react';
import StatCard from './components/StatCard';

export default function DashboardPage() {
  // Simulasi data metric server Debian
  const metrics = [
    { id: 1, title: 'CPU Load', value: '12.4 %', change: '-1.2%', isPositive: true },
    { id: 2, title: 'RAM Usage', value: '3.1 / 8 GB', change: '+0.4%', isPositive: false },
    { id: 3, title: 'Disk I/O', value: '14.8 Mb/s', change: '-4.1%', isPositive: true },
  ];

  return (
    <div className="space-y-6">
      {/* Grid Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <StatCard 
            key={metric.id}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            isPositive={metric.isPositive}
          />
        ))}
      </div>

      {/* Main Chart/Terminal Section */}
      <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 shadow-xl">
        <h3 className="font-semibold text-slate-200 mb-1">Live Process Logs</h3>
        <p className="text-xs text-slate-500 mb-4">Real-time system data stream via systemd services.</p>
        <div className="h-64 flex items-center justify-center text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-900/20 font-mono text-xs">
          [ Active connections listening on port 8080... ]
        </div>
      </div>
    </div>
  );
}
