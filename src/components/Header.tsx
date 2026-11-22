import { useCallback, useEffect, useRef, useState, type FC, type MouseEvent } from 'react';
import styles from '../styles/header.module.css';

type ContentLink = { id: string; label: string };
const CONTENT_LINKS: ContentLink[] = [
  { id: 'info', label: 'お知らせ' },
  { id: 'summary', label: 'あらすじ' },
  { id: 'character', label: '登場人物' },
  { id: 'video', label: '動画' },
  { id: 'product', label: '製品版情報' },
  { id: 'circle', label: 'サークル紹介' },
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // close the menu with the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // keep focus and screen readers inside the full-screen menu while it is open
  useEffect(() => {
    if (!isOpen) return;
    const behind = [...document.body.children].filter((el) => !el.contains(buttonRef.current));
    behind.forEach((el) => el.setAttribute('inert', ''));
    return () => behind.forEach((el) => el.removeAttribute('inert'));
  }, [isOpen]);

  const handleAnchorClick = useCallback((e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.setTimeout(() => {
      const element = document.getElementById(id);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }, 50);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        aria-controls="site-menu"
        className={`${styles.bookmark} ${isOpen ? styles.down : styles.up}`}
        onClick={toggleMenu}
      >
        <span className={styles.lineBox} aria-hidden="true">
          <span className={`${styles.upperLine} ${isOpen ? styles.upperLineCross : ''}`}></span>
          <span className={`${styles.lowerLine} ${isOpen ? styles.lowerLineCross : ''}`}></span>
        </span>
      </button>
      <nav id="site-menu" aria-label="サイト内メニュー" className={isOpen ? styles.menuOpen : styles.menuClose}>
        <ul className={styles.menu}>
          {CONTENT_LINKS.map(({ id, label }) => (
            <li key={id} className={styles.menuItem}>
              <a href={`#${id}`} className={styles.menuLink} onClick={(e) => handleAnchorClick(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
