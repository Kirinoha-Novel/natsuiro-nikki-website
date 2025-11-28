import { useCallback, useState, type FC } from 'react';
import styles from '../styles/header.module.css';

type ContentLink = { id: string; label: string };
const CONTENT_LINKS: ContentLink[] = [
  { id: 'info', label: 'お知らせ' },
  { id: 'summary', label: 'あらすじ' },
  { id: 'character', label: '登場人物' },
  { id: 'video', label: '動画' },
  { id: 'product', label: '体験版情報' },
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }, 50);
  }, []);

  return (
    <>
      <button className={`${styles.bookmark} ${isOpen ? styles.down : styles.up}`} onClick={toggleMenu}>
        <div className={styles.lineBox}>
          <span className={`${styles.upperLine} ${isOpen ? styles.upperLineCross : styles.upperLineParallel}`}></span>
          <span className={`${styles.lowerLine} ${isOpen ? styles.lowerLineCross : styles.lowerLineParallel}`}></span>
        </div>
      </button>
      <div className={isOpen ? styles.menuOpen : styles.menuClose}>
        <ul className={styles.menu}>
          {CONTENT_LINKS.map(({ id, label }) => (
            <li key={id} className={styles.menuItem}>
              <a href={`#${id}`} className={styles.menuLink} onClick={(e) => handleAnchorClick(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
