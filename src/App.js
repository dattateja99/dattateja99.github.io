// src/App.js
import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Detect theme change (listens to <html> class="dark")
  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => setIsDarkMode(html.classList.contains('dark'));
    updateTheme(); // initial check

    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // ✅ Track scroll progress for dark mode gradient animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Compute dynamic gradient only in dark mode
  const hueStart = 220 + scrollProgress * 120; // Blue → Pink shift
  const hueEnd = hueStart + 60;

  const gradientStyle = isDarkMode
    ? {
        background: `linear-gradient(135deg,
          hsl(${hueStart}, 75%, 40%) 0%,
          hsl(${hueEnd}, 75%, 30%) 100%)`,
        transition: 'background 0.3s linear',
      }
    : { background: 'white', transition: 'background 0.3s linear' };

  return (
    <div
      style={gradientStyle}
      className="min-h-screen text-foreground transition-colors duration-500"
    >
      <Helmet>
        <title>Dattateja Reddy Anakala - Software Engineer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Dattateja Reddy Anakala — a Software Engineer passionate about full-stack development, distributed systems, and AI-driven applications. Explore my projects, skills, and professional experience."
        />
        <meta
          name="keywords"
          content="Dattateja Reddy Anakala, dattateja portfolio, dattateja usc, software engineer, full stack developer, React, Flask, Python, Node.js, AWS, GCP, USC"
        />
        <meta name="author" content="Dattateja Reddy Anakala" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="Dattateja Reddy Anakala - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Dattateja Reddy Anakala — Software Engineer specializing in full-stack development, distributed systems, and AI applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dattateja.vercel.app" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dattateja Reddy Anakala - Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio of Dattateja Reddy Anakala — Software Engineer showcasing projects, skills, and experience."
        />

        <link rel="canonical" href="https://dattateja.vercel.app" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
