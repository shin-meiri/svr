import React, { Suspense, lazy } from 'react';

// Code Splitting / Lazy Loading untuk optimasi performa bundle size
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const DashboardPage = lazy(() => import('./features/dashboard/DashboardPage'));

// Skeleton loader sederhana saat transisi halaman/fitur
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
