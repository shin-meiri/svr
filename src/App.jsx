import React, { Suspense, lazy } from 'react';

// Menambahkan ekstensi .jsx secara eksplisit untuk memastikan bundler Linux menemukannya
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout.jsx'));
const DashboardPage = lazy(() => import('./features/dashboard/DashboardPage.jsx'));

// Komponen loading sederhana selama halaman dimuat
const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    </Suspense>
  );
}

