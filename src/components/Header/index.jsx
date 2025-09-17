import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import logoUrl from '/src/assets/images/x-infissi-logo.webp';

// Helper: force simple layout for specific intents (and similar labels)
const SIMPLE_KEYWORDS = [
  'installazione',
  'sostituzione',
  'riparazione',
];

const normalize = (s = '') =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();

const isSimpleEntry = (sub) => {
  if (sub?.layout === 'simple') return true;
  const label = normalize(sub?.label || '');
  return SIMPLE_KEYWORDS.some((kw) => label.startsWith(kw) || label.includes(` ${kw}`));
};

export default function Header({ nav = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFlyout, setOpenFlyout] = useState(null); // id della voce aperta (desktop)
  const [openGroupId, setOpenGroupId] = useState(null); // mobile: una sola categoria aperta
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  // chiude mobile quando cambio viewport con resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenFlyout(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openWithCancel = (id) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenFlyout(id);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenFlyout(null), 180);
  };

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Navigazione principale" ref={navRef}>
        <div className={styles.left}>
          <a href="/infissi/" className={styles.brand} aria-label="X-Infissi Home">
            <img
              src={logoUrl}
              alt="X-Infissi Logo"
              className={styles.logo}
            />
          </a>
        </div>

        {/* Desktop menu */}
        <ul className={styles.menu}>
          {nav.map((item, idx) => (
            <li
              key={item.id}
              className={styles.menuItem}
              style={{ "--i": idx }}
              onMouseEnter={() => openWithCancel(item.id)}
              onMouseLeave={scheduleClose}
            >
              <button
                className={styles.menuLink}
                aria-haspopup={item.children?.length ? "true" : "false"}
                aria-expanded={openFlyout === item.id}
                onFocus={() => setOpenFlyout(item.id)}
              >
                {item.label}
              </button>

              {item.children?.length > 0 && (
                <div
                  className={`${styles.flyout} ${openFlyout === item.id ? styles.flyoutOpen : ""}`}
                  role="region"
                  aria-label={`Sottocategorie ${item.label}`}
                  onMouseEnter={() => openWithCancel(item.id)}
                  onMouseLeave={scheduleClose}
                >
                  <ul className={styles.flyoutList}>
                    {item.children.map((sub, sIdx) => {
                      const isSimple = isSimpleEntry(sub);
                      return (
                        <li
                          key={sub.id}
                          className={`${styles.flyoutItem} ${isSimple ? styles.flyoutItemSimple : ''}`}
                          style={{ "--i": sIdx }}
                        >
                          <a
                            className={`${styles.flyoutLink} ${isSimple ? styles.flyoutLinkSimple : ''}`}
                            href={sub.href || '#'}
                          >
                            {isSimple ? (
                              // SIMPLE: solo testo, nessuna grid interna, niente immagine
                              <div className={styles.flyoutTextOnly}>
                                <span className={styles.flyoutTitle}>{sub.label}</span>
                                {sub.meta ? <span className={styles.flyoutMeta}>{sub.meta}</span> : null}
                              </div>
                            ) : (
                              // RICH: layout 1x2 con immagine a destra
                              <div className={styles.flyoutContent}>
                                <div className={styles.flyoutText}>
                                  <span className={styles.flyoutTitle}>{sub.label}</span>
                                  {sub.meta && <span className={styles.flyoutMeta}>{sub.meta}</span>}
                                </div>
                                <div className={styles.flyoutMedia} aria-hidden="true">
                                  <img
                                    src={sub.image}
                                    alt={sub.imageAlt || ''}
                                    aria-hidden={sub.imageAlt ? undefined : true}
                                    className={styles.flyoutImage}
                                  />
                                </div>
                              </div>
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
          aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className={styles.drawerList}>
          {nav.map((item, idx) => (
            <MobileGroup
              key={item.id}
              item={item}
              orderIndex={idx}
              isOpen={openGroupId === item.id}
              onToggle={() => setOpenGroupId(prev => (prev === item.id ? null : item.id))}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </ul>
      </div>

      {/* backdrop mobile */}
      <button
        className={`${styles.backdrop} ${mobileOpen ? styles.backdropShow : ""}`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />
    </header>
  );
}

function MobileGroup({ item, onNavigate, orderIndex = 0, isOpen = false, onToggle = () => {} }) {
  return (
    <li className={styles.group} style={{ "--i": orderIndex }}>
      <button
        className={styles.groupToggle}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{item.label}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}>
          <path d="M1.5 3l3.5 4L8.5 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
      {item.children?.length > 0 && (
        <ul className={`${styles.groupList} ${isOpen ? styles.groupListOpen : ""}`}>
          {item.children.map((sub, subIdx) => {
            const simple = isSimpleEntry(sub);
            const hasThumb = !simple && (sub.image || sub.flyoutImage);
            return (
              <li key={sub.id} className={styles.groupItem} style={{ "--i": subIdx }}>
                <a
                  href={sub.href || "#"}
                  className={`${styles.groupLink} ${!hasThumb ? styles.noThumb : ''}`}
                  onClick={onNavigate}
                >
                  <span className={styles.groupThumb} aria-hidden={true}>
                    {hasThumb && (
                      <img
                        src={sub.image || sub.flyoutImage}
                        alt=""
                        className={styles.groupThumbImg}
                        loading="lazy"
                      />
                    )}
                  </span>

                  <span className={styles.groupText}>
                    <span className={styles.flyoutTitle}>{sub.label}</span>
                    {sub.meta && <span className={styles.groupMeta}>{sub.meta}</span>}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}