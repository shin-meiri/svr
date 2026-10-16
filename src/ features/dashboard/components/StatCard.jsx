import React from 'react';

export default function StatCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 transition-all hover:border-slate-850 shadow-md">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-2xl font-bold font-mono text-white tracking-tight">{value}</span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
          isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}
