// 1. Bagian Import
import React, { useState } from 'react';
import './App.css';

// 2. Bagian Fungsi Komponen
function App() {
  const [skor, setSkor] = useState(0);

  return (
    <div className="container">
      <h1>Selamat Datang di Aplikasi Saya!</h1>
      <p>Anda telah mengklik sebanyak {skor} kali.</p>
      <button onClick={() => setSkor(skor + 1)}>
        Klik Saya
      </button>
    </div>
  );
}

// 3. Bagian Export
export default App;
