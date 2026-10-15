import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // 1. Wajib tambahkan ekstensi .jsx jika menggunakan Vite

// 2. reportWebVitals dihapus karena tidak digunakan di Vite

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
