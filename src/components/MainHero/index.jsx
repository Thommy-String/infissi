import styles from "./index.module.css";

const MainHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>FORNITURA + POSA</p>
        <h1 className={styles.title}>
          Serramenti direttamente dalla fabbrica. <span className={styles.pezzo}>Lombardia.​</span>
        </h1>
      </div>
    </section>
  );
};

export default MainHero;