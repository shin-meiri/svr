import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Pro */}
        <aside className="w-64 bg-slate-950 border-r border-slate-850 p-6 flex flex-col justify-between hidden md:flex">
          <div>
            <div className="flex items-center gap-3 px-2 py-3 mb-8">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 shadow-md" />
              <span className="font-bold text-lg text-white">NovaCore</span>
            </div>
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white">
                <span>📊</span> Overview
              </button>
            </nav>
          </div>
          <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 text-xs">
            <p className="font-semibold text-slate-200">Production Server</p>
            <p className="text-[10px] text-emerald-400 font-mono">debian-stable-active</p>
          </div>
        </aside>

        {/* Content Container */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <header className="h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur px-8 flex items-center justify-between sticky top-0 z-10">
            <h1 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">System Monitor</h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Connected to Debian
            </span>
          </header>
          
          {/* Inject Halaman Fitur di Sini */}
          <main className="p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
