"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export const languages = [
  { code: 'en', label: 'English', nativeLabel: 'English', icon: '🇬🇧', pathPrefix: '' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', icon: '🇫🇷', pathPrefix: '/fr' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', icon: '🇪🇸', pathPrefix: '/es' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', icon: '🇩🇪', pathPrefix: '/de' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский', icon: '🇷🇺', pathPrefix: '/ru' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português', icon: '🇵🇹', pathPrefix: '/pt' }
];

const languagePrefixPattern = /^\/(fr|es|de|ru|pt)(?=\/|$)/;

function stripLanguagePrefix(pathname) {
  const basePath = pathname.replace(languagePrefixPattern, '') || '/';
  return basePath.startsWith('/') ? basePath : `/${basePath}`;
}

function getCurrentLanguage(pathname) {
  const match = pathname.match(languagePrefixPattern);
  return match ? match[1] : 'en';
}

function getLocalizedPath(pathname, language) {
  const basePath = stripLanguagePrefix(pathname);

  if (language.code === 'en') {
    return basePath;
  }

  return basePath === '/' ? `${language.pathPrefix}/` : `${language.pathPrefix}${basePath}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const optionRefs = useRef([]);
  const currentLanguageCode = getCurrentLanguage(pathname);
  const currentLanguage = useMemo(
    () => languages.find((language) => language.code === currentLanguageCode) || languages[0],
    [currentLanguageCode]
  );

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  function handleButtonKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      requestAnimationFrame(() => optionRefs.current[0]?.focus());
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      requestAnimationFrame(() => optionRefs.current[languages.length - 1]?.focus());
    }
  }

  function handleOptionKeyDown(event, index) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      optionRefs.current[(index + 1) % languages.length]?.focus();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      optionRefs.current[(index - 1 + languages.length) % languages.length]?.focus();
    }
  }

  function handleLanguageClick(event, language) {
    event.preventDefault();
    const nextPath = getLocalizedPath(window.location.pathname, language);
    window.location.assign(`${nextPath}${window.location.search}${window.location.hash}`);
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        className="language-trigger"
        type="button"
        aria-label="Select website language"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleButtonKeyDown}
      >
        <span className="language-globe" aria-hidden="true">🌐</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
      </button>

      <div className={`language-menu${isOpen ? ' is-open' : ''}`} role="menu" aria-label="Website language options">
        {languages.map((language, index) => {
          const isActive = language.code === currentLanguage.code;

          return (
            <a
              className={`language-option${isActive ? ' is-active' : ''}`}
              href={getLocalizedPath(pathname, language)}
              key={language.code}
              ref={(element) => {
                optionRefs.current[index] = element;
              }}
              role="menuitem"
              aria-current={isActive ? 'true' : undefined}
              onClick={(event) => handleLanguageClick(event, language)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
            >
              <span className="language-icon" aria-hidden="true">{language.icon}</span>
              <span className="language-name">{language.nativeLabel}</span>
              <span className="language-code">{language.code.toUpperCase()}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
