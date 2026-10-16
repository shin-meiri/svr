import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="home-wrapper">
      {/* 1. NAVIGATION BAR */}
      <nav className="navbar">
        <div className="nav-logo">Dev<span>Studio</span></div>
        <ul className="nav-links">
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button className="btn-contact">Get Started</button>
      </nav>

      {/* 2. HERO SECTION */}
      <header id="hero" className="hero-section">
        <div className="hero-content">
          <span className="badge">Welcome to the Future</span>
          <h1>Bangun Aplikasi Impian Anda Lebih <span>Cepat & Modern</span></h1>
          <p>Kami membantu Anda menciptakan pengalaman digital yang luar biasa dengan teknologi web terdepan, performa maksimal, dan desain yang memikat pengguna.</p>
          
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => setLikes(likes + 1)}>
              ❤️ Beri Apresiasi ({likes})
            </button>
            <a href="#services" className="btn-secondary">Pelajari Fitur</a>
          </div>
        </div>
        
        {/* Visual Card Kanan */}
        <div className="hero-visual">
          <div className="glass-card">
            <h3>⚡ Performa Kilat</h3>
            <p>Dioptimalkan penuh menggunakan React + Vite untuk kecepatan rendering terbaik.</p>
            <div className="progress-bar"><div className="progress-fill"></div></div>
          </div>
        </div>
      </header>

      {/* 3. SERVICES / FEATURES SECTION */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Layanan Unggulan Kami</h2>
          <p>Solusi digital menyeluruh untuk membantu perkembangan bisnis dan ide kreatif Anda.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon-box">🎨</div>
            <h3>Modern UI/UX</h3>
            <p>Desain antarmuka yang bersih, intuitif, dan memanjakan mata pengguna.</p>
          </div>

          <div className="service-card">
            <div className="icon-box">📱</div>
            <h3>Responsive Design</h3>
            <p>Tampilan yang fleksibel dan tetap sempurna diakses dari HP, Tablet, maupun PC.</p>
          </div>

          <div className="service-card">
            <div className="icon-box">🚀</div>
            <h3>SEO Optimized</h3>
            <p>Struktur kode yang ramah mesin pencari untuk menaikkan peringkat website Anda.</p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DevStudio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App