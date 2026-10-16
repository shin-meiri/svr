import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="nature-wrapper">
      {/* BACKGROUND GRAPHIC ELEMENTS */}
      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>

      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <nav className="glass-nav">
        <div className="nav-logo">
          🌿 Terra<span>UHD</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" className="active">Eksplorasi</a></li>
          <li><a href="#gallery">Galeri 8K</a></li>
          <li><a href="#about">Konservasi</a></li>
        </ul>
        <button className="btn-premium">Unduh Wallpaper</button>
      </nav>

      {/* 2. HERO CONTENT SECTION */}
      <main id="home" className="nature-hero">
        <div className="hero-text-card">
          <span className="nature-badge">✨ Imersif Ultra HD 8K</span>
          <h1>Rasakan Kemegahan <span>Alam Liar</span> Dari Layar Anda</h1>
          <p>
            Bawa keheningan hutan berkabut, kemegahan puncak gunung es, dan kedalaman samudra langsung ke ruang digital Anda dengan ketajaman visual tanpa kompromi.
          </p>
          
          <div className="cta-wrapper">
            <button className="btn-explore">Mulai Penjelajahan</button>
            <button className="btn-link">Video Sinematik ↗</button>
          </div>
        </div>

        {/* 3. INTERACTIVE STATS CONTROLLER (GLASSMORPHISM) */}
        <div className="glass-dashboard">
          <div className="dash-header">
            <h3>📊 Monitor Keasrian Lingkungan</h3>
            <span className="live-indicator">LIVE</span>
          </div>
          <p className="dash-desc">Data real-time area lindung dan reboisasi global tahun {new Date().getFullYear()}.</p>
          
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-num">98.4%</span>
              <span className="stat-lbl">Kualitas Udara Hutan</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">12.5k</span>
              <span className="stat-lbl">Pohon Ditanam Hari Ini</span>
            </div>
          </div>

          <div className="eco-progress">
            <div className="progress-text">
              <span>Target Konservasi Global</span>
              <span>85%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill"></div>
            </div>
          </div>
        </div>
      </main>

      {/* 4. ECO-FEATURES SECTION */}
      <section id="gallery" className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="card-icon">🏔️</div>
            <h4>Pegunungan Alpine</h4>
            <p>Puncak bersalju abadi yang diabadikan pada golden hour dengan akurasi warna gamut Rec.2020.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">🪵</div>
            <h4>Hutan Hujan Tropis</h4>
            <p>Detail dedaunan mikroskopis dan partikel embun pagi yang menangkap atmosfer kedamaian murni.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">🌊</div>
            <h4>Pesisir Samudra</h4>
            <p>Deburan ombak berkecepatan tinggi yang ditangkap dengan detail kristal air beresolusi super.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

