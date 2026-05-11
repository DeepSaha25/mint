import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

const THEME_KEY = 'mint-theme';

function applyTheme(mode) {
  const root = document.documentElement;

  if (mode === 'light') {
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
    return;
  }

  if (mode === 'dark') {
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
    return;
  }

  root.removeAttribute('data-theme');
  root.style.colorScheme = 'light dark';
}

export default function ThemeSwitch({ compact = false }) {
  const [themeMode, setThemeMode] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const initialMode = savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system' ? savedTheme : 'system';

    setThemeMode(initialMode);
    applyTheme(initialMode);
  }, []);

  const setMode = (mode) => {
    setThemeMode(mode);
    localStorage.setItem(THEME_KEY, mode);
    applyTheme(mode);
  };

  return (
    <div className={`theme-switch inline-flex items-center rounded-full border border-border bg-white/90 p-1 ${compact ? 'theme-switch-compact' : ''}`}>
      <button
        type="button"
        onClick={() => setMode('system')}
        aria-label="Use system theme"
        className={`theme-switch-option ${themeMode === 'system' ? 'is-active' : ''}`}
      >
        <Monitor size={14} />
      </button>
      <button
        type="button"
        onClick={() => setMode('light')}
        aria-label="Use light theme"
        className={`theme-switch-option ${themeMode === 'light' ? 'is-active' : ''}`}
      >
        <Sun size={14} />
      </button>
      <button
        type="button"
        onClick={() => setMode('dark')}
        aria-label="Use dark theme"
        className={`theme-switch-option ${themeMode === 'dark' ? 'is-active' : ''}`}
      >
        <Moon size={14} />
      </button>
    </div>
  );
}
