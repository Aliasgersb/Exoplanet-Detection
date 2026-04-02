import React, { useState } from 'react';
import Overview from './components/Overview';
import ExploreStars from './components/ExploreStars';
import ModelPerformance from './components/ModelPerformance';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import MobileWarning from './components/MobileWarning';

const NAV = [
  { id: 'overview',     label: 'Overview' },
  { id: 'explore',      label: 'Explore Stars' },
  { id: 'performance',  label: 'Model Performance' },
  { id: 'how',          label: 'How It Works' },
  { id: 'about',        label: 'About' },
];

export default function App() {
  const [active, setActive] = useState('overview');

  const handleNavigate = (section, targetId) => {
    setActive(section);
    if (targetId) {
      // Small timeout to allow the browser to render the section before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white flex font-sans antialiased">
      <MobileWarning />
      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <nav className="w-56 shrink-0 border-r border-border flex flex-col h-screen sticky top-0 px-10 py-12">
        <button
          onClick={() => handleNavigate('overview')}
          className="text-left text-lg font-bold tracking-tight text-white mb-14 hover:opacity-70 transition-opacity"
        >
          Stellar.
        </button>

        <div className="flex flex-col gap-5">
          {NAV.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-left text-sm transition-colors duration-100 ${
                active === item.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Active indicator line */}
        <div className="mt-auto">
          <div className="w-6 h-px bg-border" />
        </div>
      </nav>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <main className="flex-1 px-14 py-12 overflow-y-auto">
        {active === 'overview'    && <Overview onNavigateToExplore={() => handleNavigate('explore')} />}
        {active === 'explore'     && <ExploreStars />}
        {active === 'performance' && <ModelPerformance onNavigate={handleNavigate} />}
        {active === 'how'         && <HowItWorks />}
        {active === 'about'       && <About />}
      </main>
    </div>
  );
}
