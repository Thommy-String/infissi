//CategoryGrid index.jss

import styles from './index.module.css';
import CategoryCard from '../CategoryCard';

export default function CategoryGrid({ cards = [], gap = '12px' }) {
  if (!cards?.length) return null;

  return (
    <section className={styles.grid} style={{ '--grid-gap': gap }}>
      {cards.slice(0, 4).map((card, idx) => (
        <div className={styles.cell} key={idx}>
          <CategoryCard
            size="sm"
            hideSubtitle={card.hideSubtitle ?? true}   // ⬅️ sottotitolo nascosto by default nel grid
            imageHeight={card.imageHeight}
            imageHeightMobile={card.imageHeightMobile}
            {...card}                                  // meta, title, imageSrc, etc. passano normalmente
          />
        </div>
      ))}
    </section>
  );
}