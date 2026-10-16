import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)

  // Membuat daftar angka 1 sampai 50 secara aman
  const totalGambar = Array.from({ length: 50 }, (_, i) => i + 1)

  return (
    <div className="nature-wrapper">
      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>

      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <nav className="glass-nav">
        <div className="nav-logo">🌿 Terra<span>UHD</span></div>
        <ul className="nav-menu">
          <li><a href="#home" className="active">Eksplorasi</a></li>
          <li><a href="#gallery">Galeri 8K</a></li>
        </ul>
        <button className="btn-premium">Unduh Semua</button>
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
            <button className="btn-explore" onClick={() => setLikes(likes + 1)}>
              ❤️ Apresiasi ({likes})
            </button>
            <a href="#gallery" className="btn-link">Lihat Koleksi ↓</a>
          </div>
        </div>

        {/* 3. INTERACTIVE STATS CONTROLLER (GLASSMORPHISM) */}
        <div className="glass-dashboard">
          <div className="dash-header">
            <h3>📊 Status Server Galeri</h3>
            <span className="live-indicator">ONLINE</span>
          </div>
          <p className="dash-desc">Data muatan aset gambar resolusi tinggi server saat ini.</p>
          
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-num">50</span>
              <span className="stat-lbl">Total Gambar</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">8K</span>
              <span className="stat-lbl">Resolusi Gambar</span>
            </div>
          </div>
        </div>
      </main>

      {/* 4. SAFE DYNAMIC GALLERY GRID (50 GAMBAR) */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <h2>Koleksi Visual Alam Terpilih</h2>
          <p>Jelajahi 50 sudut keindahan bumi berspesifikasi Ultra High Definition.</p>
        </div>

        <div className="gallery-grid">
          {totalGambar.map((nomor) => (
            <div key={nomor} className="gallery-card">
              <div className="image-container">
                {/* Proteksi error: Jika gambar gagal dimuat, ia tidak akan membuat web blank putih */}
                <img 
                  src={`/images/${nomor}.jpg`} 
                  alt={`Keindahan Alam #${nomor}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co+' + nomor;
                  }}
                />
                <div className="image-overlay">
                  <span>Nature UHD #{nomor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="nature-footer">
        <p>&copy; {new Date().getFullYear()} TerraUHD Server. Tersimpan di direktori Debian.</p>
      </footer>
    </div>
  )
}

export default App
