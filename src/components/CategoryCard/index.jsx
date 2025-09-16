//CategoryCard index.jsx
import styles from './index.module.css';

export default function CategoryCard({
  title = 'Infissi in Alluminio',
  subtitle = 'Sottili. Resistenti. Luminosi.',
  meta = 'Sopralluogo gratuito • Detrazione 50%',
  primaryCta = { label: 'Scopri di più', href: '#prodotti' },
  secondaryCta = { label: 'Calcola preventivo', href: '#preventivo' },
  imageSrc,
  imageAlt = 'Dettaglio infisso',
  variant = 'dark', // 'dark' | 'light'
  bgColor,
  size = 'md',
  imageHeight = null,
  imageHeightMobile = null,
  hideSubtitle = false,
}) {
  const background = bgColor
    ? bgColor
    : variant === 'dark'
      ? '#000'
      : '#f5f5f7';

  return (
    <section
      className={`${styles.hero} ${variant === 'dark' ? styles.dark : styles.light} ${size === 'sm' ? styles.sm : ''}`}
      style={{
        backgroundColor: background,
        '--hero-bg': background,
        ...(imageHeight ? { '--hero-image-height': imageHeight } : {}),
        ...(imageHeightMobile ? { '--hero-image-height-mobile': imageHeightMobile } : {}),
      }}
    >
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {!hideSubtitle && subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {meta && <p className={styles.meta}>{meta}</p>}

        <div className={styles.ctas} role="group" aria-label="Azioni principali">
          <a className={`${styles.btn} ${styles.btnPrimary}`} href={primaryCta.href}>
            {primaryCta.label}
          </a>
          <a className={`${styles.btn} ${styles.btnGhost}`} href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        </div>

        {imageSrc && (
          <div className={styles.imageWrap} aria-hidden="true">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}