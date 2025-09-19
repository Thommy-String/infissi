import React, { useRef } from "react";
import styles from "./index.module.css";

export default function MainCategories({ items = [], title = "Prodotti" }) {
  const trackRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.card}`);
    const delta = (card?.offsetWidth || 280) + 16; // width + gap
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  // Trasforma lo scroll verticale del mouse in orizzontale (desktop)
  const onWheel = (e) => {
    if (!trackRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      trackRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>

        <div
          ref={trackRef}
          className={styles.track}
          onWheel={onWheel}
        >
          {/* gradient edges */}
          <span className={`${styles.edge} ${styles.leftEdge}`} aria-hidden />
          <span className={`${styles.edge} ${styles.rightEdge}`} aria-hidden />

          {items && items.length > 0 ? (
            items.map((it, i) => (
              <a key={i} href={it.href || "#"} className={styles.card}>
                <span className={styles.thumb}>
                  <img src={it.image} alt={it.title} loading="lazy" />
                </span>
                <span className={styles.label}>{it.title}</span>
              </a>
            ))
          ) : (
            <p className={styles.noItems}>Nessuna categoria disponibile.</p>
          )}
        </div>

        <div className={styles.controls} aria-hidden="false">
          <button className={styles.navBtn} onClick={() => scrollByCard(-1)} aria-label="Precedente">‹</button>
          <button className={styles.navBtn} onClick={() => scrollByCard(1)}  aria-label="Successivo">›</button>
        </div>
      </div>
    </section>
  );
}