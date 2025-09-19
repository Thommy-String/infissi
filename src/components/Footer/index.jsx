// src/components/Footer/index.jsx
import { useState } from "react";
import styles from "./index.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const year = new Date().getFullYear();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrare con backend/newsletter provider
    alert("Grazie! Ti aggiorneremo con le novità di X-INFISSI.");
    setEmail("");
  };

  return (
    <footer className={styles.footer} aria-label="Piè di pagina">
      {/* top: brand + colonne */}
      <div className={styles.inner}>
        {/* Brand / Payoff */}
        <section className={styles.brand} aria-label="Brand">
          <a className={styles.logoLink} href="/" aria-label="Homepage X-INFISSI">
            <img
              src="./src/assets/images/x-infissi-logo.webp"
              alt="X-INFISSI"
              className={styles.logo}
              loading="lazy"
              width="140"
              height="40"
            />
          </a>
          <p className={styles.tagline}>
            Fornitura e posa serramenti.
          </p>

          {/* CTA principali */}
          <div className={styles.ctaRow} role="group" aria-label="Contatti rapidi">
            <a href="tel:+390000000000" className={styles.cta} data-variant="primary">
               Chiama
            </a>
            <a href="mailto:info@x-infissi.it" className={styles.cta} data-variant="ghost">
               Email
            </a>
            <a href="/preventivo" className={styles.cta} data-variant="outline">
              Preventivo
            </a>
          </div>

          {/* Social */}
          <ul className={styles.social} aria-label="Seguici sui social">
            <li><a href="#" aria-label="Instagram" className={styles.socialLink}>Instagram</a></li>
            <li><a href="#" aria-label="Facebook" className={styles.socialLink}>Facebook</a></li>
            <li><a href="#" aria-label="YouTube" className={styles.socialLink}>YouTube</a></li>
            <li><a href="#" aria-label="LinkedIn" className={styles.socialLink}>LinkedIn</a></li>
          </ul>
        </section>

        {/* Colonne link */}
        <nav className={styles.columns} aria-label="Collegamenti rapidi">
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Prodotti</h3>
            <ul className={styles.colList}>
              <li><a href="/prodotti/infissi">Infissi</a></li>
              <li><a href="/prodotti/finestre">Finestre</a></li>
              <li><a href="/prodotti/tapparelle">Tapparelle</a></li>
              <li><a href="/prodotti/zanzariere">Zanzariere</a></li>
              <li><a href="/prodotti/persiane">Persiane</a></li>
              <li><a href="/prodotti/porte-garage">Porte garage</a></li>
              <li><a href="/prodotti/porte-interne">Porte interne</a></li>
              <li><a href="/prodotti/tende">Tende da sole</a></li>
              <li><a href="/prodotti/cassonetti">Cassonetti</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Servizi</h3>
            <ul className={styles.colList}>
              <li><a href="/servizi/finestre/nuova">Nuova installazione</a></li>
              <li><a href="/servizi/finestre/sostituzione">Sostituzione</a></li>
              <li><a href="/servizi/finestre/riparazione">Riparazione</a></li>
              <li><a href="/assistenza">Assistenza</a></li>
              <li><a href="/garanzia">Garanzia</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Azienda</h3>
            <ul className={styles.colList}>
              <li><a href="/chi-siamo">Chi siamo</a></li>
              <li><a href="/showroom">Showroom</a></li>
              <li><a href="/recensioni">Recensioni</a></li>
              <li><a href="/lavori">Lavori realizzati</a></li>
              <li><a href="/contatti">Contatti</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* bottom: legal + policy */}
      <div className={styles.legalBar}>
        <div className={styles.legalInner}>
          <p className={styles.copy}>
            © {year} X-INFISSI. Tutti i diritti riservati.
          </p>
          <ul className={styles.legalLinks}>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/cookie">Cookie</a></li>
            <li><a href="/termini">Termini</a></li>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/mappa-sito">Mappa sito</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}