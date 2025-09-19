import CategoryCard from './components/CategoryCard'
import CategoryGrid from './components/CategoryGrid'
import Footer from './components/Footer'
import Header from "./components/Header"
import MainHero from './components/MainHero'
import pvcInfisso from './assets/images/pvcInfisso.png'
import tapparelle from './assets/images/tapparelle.png'
import MainCategories from './components/MainCategories.jsx'


const INTENTS = {
  nuova:       { key: 'nuova',       label: 'Nuova installazione',     meta: 'Consulenza, scelta e posa professionale.' },
  sostituzione:{ key: 'sostituzione',label: 'Sostituzione',meta: 'Rimozione vecchi infissi e installazione pulita del nuovo.' },
  riparazione:{ key: 'riparazione',label: 'Riparazione', meta: 'Assistenza su blocchi, rotture e infiltrazioni.' },
};

const SUBCATS = {
  infissi: [
    { slug: 'pvc',         label: 'Infissi in PVC',        meta: 'Ottimo isolamento e manutenzione minima.', image: 'https://www.serramentipellegrino.it/wp-content/uploads/2020/05/lumen-est-profilo.jpg', imageAlt: 'Infisso in PVC moderno' },
    { slug: 'alluminio',   label: 'Infissi in alluminio',  meta: 'Sottili, resistenti, moderni.',             image: 'https://www.alsistem.it/wp-content/uploads/2019/05/SLIDE-60.jpg', imageAlt: 'Telaio finestra in alluminio' },
    { slug: 'legno',       label: 'Infissi in legno',      meta: 'Calore estetico e performance elevate.',    image: 'https://www.mdbportas.com/wp-content/uploads/infisso-in-legno-energia-e9-6.jpg', imageAlt: 'Infisso in legno' },
  ],
  finestre: [
    { slug: 'battente',    label: 'Finestre a battente',   meta: 'Versatili e isolate.',                      image: 'https://i.ebayimg.com/images/g/-ZMAAOSwSiVmL2yn/s-l1200.jpg', imageAlt: 'Finestra a battente' },
    { slug: 'scorrevoli',  label: 'Finestre scorrevoli',   meta: 'Grandi luci, zero ingombro.',               image: 'https://www.alsistemcalabria.it/wp-content/uploads/serramenti-scorrevoli-in-alluminio-legno.jpg', imageAlt: 'Finestra scorrevole' },
    { slug: 'vasistas',    label: 'Finestre vasistas',     meta: 'Apertura a ribalta per ricambio aria.',     image: 'https://fabbro.roma.it/wp-content/uploads/2018/12/Apertura-vasistas.png', imageAlt: 'Finestra vasistas' },
  ],
  tapparelle: [
    { slug: 'alluminio',   label: 'Tapparelle in alluminio', meta: 'Leggere e resistenti.',                   image: 'https://www.windowo.it/data/image/Tapparelle/tapparella-alluminio-estruso.jpg', imageAlt: 'Tapparella in alluminio' },
    { slug: 'acciaio',     label: 'Tapparelle in acciaio',   meta: 'Sicurezza potenziata.',                    image: 'https://www.claba.it/wp-content/uploads/2017/04/Offerta-serrande-motorizzate-desio.jpg', imageAlt: 'Tapparella in acciaio' },
    { slug: 'pvc',         label: 'Tapparelle in PVC',       meta: 'Economiche e pratiche.',                   image: 'https://www.windowo.it/data/thumb_cache/_data_prod_img_tapparella_in_alluminio_14x55mm_con_poliuretano_normale_densita_png_r_400_263.png', imageAlt: 'Tapparella in PVC' },
  ],
  zanzariere: [
    { slug: 'avvolgibile', label: 'Avvolgibili',           meta: 'Pratiche per ogni finestra.',               image: 'https://www.zanzariere.shop/timg/zanzariera_verticale_molla_spazzolino_click_clack_2023.png/u', imageAlt: 'Zanzariera avvolgibile' },
    { slug: 'plissettate', label: 'Plissettate',           meta: 'Sottili e eleganti.',                        image: 'https://www.zanzariereonline.com/wp-content/uploads/2020/06/Mini-Smart-zanzariera-ingombro-18mm-500x500-1.jpg', imageAlt: 'Zanzariera plissettata' },
    { slug: 'battente',    label: 'A battente',            meta: 'Ideali per porte-finestre.',                 image: 'https://i0.wp.com/store.casae.it/wp-content/uploads/2022/02/00003474.jpg?fit=1080%2C1080&ssl=1', imageAlt: 'Zanzariera a battente' },
  ],
  persiane: [
    { slug: 'alluminio',   label: 'Persiane in alluminio', meta: 'Zero manutenzione.',                         image: 'https://www.tecnomat.it/pub/media/catalog/product/f/4/e/2/persiana_in_alluminio_marrone_marezzato_ante_x_cm_lxh_10041353_picture.JPG', imageAlt: 'Persiana in alluminio' },
    { slug: 'legno',       label: 'Persiane in legno',     meta: 'Classiche e calde.',                         image: 'https://www.showroominfissi.it/cdn/shop/files/legno_6ae856c9-1b1f-45b7-94ed-81a181e4c6e0.jpg?v=1708940393&width=1445', imageAlt: 'Persiana in legno' },
    { slug: 'blindate',    label: 'Persiane blindate',     meta: 'Antintrusione.',                              image: 'https://media.adeo.com/media/69270/media.jpeg?width=3000&height=3000&format=jpg&quality=80&fit=bounds', imageAlt: 'Persiana blindata' },
  ],
  'porte-garage': [
    { slug: 'basculanti',  label: 'Basculanti',            meta: 'Robuste e funzionali.',                      image: 'https://www.ballan.com/cache/media/2017/09/zink_gtped_188.jpg/8e6bea90633cc31f9e81009298ffda1e.jpg', imageAlt: 'Porta garage basculante' },
    { slug: 'sezionali',   label: 'Sezionali',             meta: 'Isolamento e comfort.',                      image: 'https://edpserramentieporte.it/wp-content/uploads/2022/06/porte-basculanti-sezionali-garage-slide.png', imageAlt: 'Porta garage sezionale' },
    { slug: 'avvolgibili', label: 'Avvolgibili',           meta: 'Ingombro minimo.',                           image: 'https://www.finestre.com/fileadmin/images/it/porta-garage/L3/porta-avvolgibile-basic-antracite.jpg', imageAlt: 'Porta garage avvolgibile' },
  ],
  'porte-interne': [
    { slug: 'battente',    label: 'A battente',            meta: 'Soluzione tradizionale.',                    image: 'https://www.tecnomat.it/pub/media/catalog/product/8/1/2/7/porta_da_interno_battente_bianca_new_contract_effebiquattro_x_cm_lxh_reversibile_25004899_picture.jpg?auto=webp&width=602&height=602&quality=100&bg-color=255,255,255&fit=bounds&format=webp', imageAlt: 'Porta interna a battente' },
    { slug: 'scorrevoli',  label: 'Scorrevoli',            meta: 'Salvaspazio elegante.',                      image: 'https://bilder.obi-italia.it/5241f7f2-17ff-4d7e-ac94-755fc1d360e3/prZZH/542345_2043_1.jpg', imageAlt: 'Porta interna scorrevole' },
    { slug: 'filo-muro',   label: 'Filo muro',             meta: 'Design minimale.',                           image: 'https://www.parquet.disegnarecasa.com/images/stories/virtuemart/product/Porte%20filo%20muro-2.jpg', imageAlt: 'Porta interna filo muro' },
  ],
  tende: [
    { slug: 'bracci',      label: 'A bracci estensibili',  meta: 'Ombra ampia e regolabile.',                  image: 'https://www.letapparelle.com/img/prodotti/grandi/1589_tendadasoleabracciatempotestnew8000boxcassonettoascomparsa.jpg', imageAlt: 'Tenda da sole a bracci' },
    { slug: 'cappottine',  label: 'Cappottine',            meta: 'Look classico per facciate.',                image: 'https://www.schiavonexteriors.it/wp-content/uploads/2022/03/Tenda-a-cappottino.jpeg', imageAlt: 'Tenda a cappottina' },
    { slug: 'verticali',   label: 'Schermature verticali', meta: 'Protezione dal sole e privacy.',             image: 'https://www.guidafinestra.it/media/085918769-93e018b7-f5c8-43e7-b892-0a9e818d4e49.jpg', imageAlt: 'Schermatura verticale' },
  ],
  cassonetti: [
    { slug: 'coibentati',   label: 'Coibentati',           meta: 'Taglio termico e acustico.',                 image: 'https://www.pompeja.it/images/img_blog/081_cassonetto_isolato.jpg', imageAlt: 'Cassonetto coibentato' },
    { slug: 'a-scomparsa',  label: 'A scomparsa',          meta: 'Integrazione totale.',                       image: 'https://www.bedaplast.com/wp-content/uploads/2019/02/0.cassonetti.jpg', imageAlt: 'Cassonetto a scomparsa' },
  ],
};

const MACRO_CATEGORIES = [
  { title: 'Infissi',       image: 'https://www.esaitalyserramenti.it/images/infissi.png', href: '/prodotti/infissi' },
  { title: 'Tapparelle',    image: tapparelle, href: '/prodotti/tapparelle' },
  { title: 'Porte interne', image: 'https://www.scaliahomedesign.it/userfiles/image/scalia-home-design-porte-finestre-custonaci-trapani-porte-interne-double.png?1545906829170', href: '/prodotti/porte-interne' },
  { title: 'Persiane',      image: 'https://demo.puntopersiane.it/wp-content/uploads/2023/06/PIEMONTESE.png', href: '/prodotti/persiane' },
  { title: 'Zanzariere',    image: 'https://cdn-it02.markeplay.com/media/images/c43e228275c54b1302049ecd436534449aea5305/image.webp?v=1', href: '/prodotti/zanzariere' },
  { title: 'Porte garage',  image: 'https://lacentrale-eco.com/images/detailed/12/porte_de_garage_-_hormann.png', href: '/prodotti/porte-garage' },
  { title: 'Tende da sole', image: 'https://www.isotra.it/m-images/1/2414/638314117842533333/preview/r-1000x324-85/Jasmina.png', href: '/prodotti/tende' },
  { title: 'Cassonetti',    image: 'https://www.infinitoserramenti.it/wp-content/uploads/2024/12/cassonetto-bora-per-finestre.png', href: '/prodotti/cassonetti' },
];

const buildItem = (cat, intent) => ({
  id: `${cat}-${intent.key}`,
  label: intent.label,
  href: `/servizi/${cat}/${intent.key}`,
  meta: intent.meta,
  layout: 'simple',
});

const buildCat = (id, label, intents, subcats = []) => ({
  id,
  label,
  children: [
    // Sottocategorie prodotto direttamente nel flyout
    ...subcats.map(sc => ({
      id: `${id}-sub-${sc.slug}`,
      label: sc.label,
      href: `/prodotti/${id}/${sc.slug}`,
      meta: sc.meta,
      image: sc.image,
      imageAlt: sc.imageAlt,
    })),
    // Intenti servizio standard
    ...intents.map(i => buildItem(id, INTENTS[i])),
  ],
});

// categorie con set di intenti coerente
const NAV = [
  buildCat('infissi',       'Infissi',       ['nuova','sostituzione','riparazione'], SUBCATS.infissi),
  buildCat('finestre',      'Finestre',      ['nuova','sostituzione','riparazione'], SUBCATS.finestre),
  buildCat('tapparelle',    'Tapparelle',    ['nuova','sostituzione','riparazione'], SUBCATS.tapparelle),
  buildCat('zanzariere',    'Zanzariere',    ['nuova','sostituzione','riparazione'], SUBCATS.zanzariere),
  buildCat('persiane',      'Persiane',      ['nuova','sostituzione','riparazione'], SUBCATS.persiane),
  buildCat('porte-garage',  'Porte garage',  ['nuova','sostituzione','riparazione'], SUBCATS['porte-garage']),
  buildCat('porte-interne', 'Porte interne', ['nuova','sostituzione','riparazione'], SUBCATS['porte-interne']),
  buildCat('tende',         'Tende da sole', ['nuova','sostituzione','riparazione'], SUBCATS.tende),
  buildCat('cassonetti',    'Cassonetti',    ['nuova','sostituzione','riparazione'], SUBCATS.cassonetti),
];

const CONTACTS = {
  id: 'contatti',
  label: 'Contatti',
  type: 'group',
  children: [
    {
      id: 'contatti-chiama',
      label: 'Chiama 📞',
      href: 'tel:+390000000000',
      meta: 'Parla con un esperto ora.',
      layout: 'simple',
    },
    {
      id: 'contatti-email',
      label: 'Scrivi email ✉️',
      href: 'mailto:info@x-infissi.it',
      meta: 'Rispondiamo in 24 ore.',
      layout: 'simple',
    },
    {
      id: 'contatti-preventivo',
      label: 'Crea preventivo ✍🏻',
      href: '/preventivo',
      meta: 'Stima immediata su misura.',
      layout: 'simple',
    },
    {
      id: 'indirizzo',
      label: 'Showroom 📍',
      href: '/negozio',
      meta: 'Vieni a trovarci.',
      layout: 'simple',
    },
  ],
};

function App() {
  

  return (
    <>
      <Header nav={[...NAV, CONTACTS]} />
      <MainHero></MainHero>
      <MainCategories items={MACRO_CATEGORIES} />
      <CategoryCard
        title='Infissi in PVC'
        subtitle='Durabilità e isolamento termico.'
        cta='Scopri di più'
        imageSrc={pvcInfisso}
        price='da € 99'
        variant="dark"
        bgColor="#000000"
        imageHeight="650px"
        imageHeightMobile="420px"
      />
      <CategoryCard
        title='Finestre'
        subtitle='Ampia scelta di modelli e finiture.'
        cta='Scopri di più'
        imageSrc='https://www.orvindustrie.it/wp-content/uploads/2024/07/finestra-in-PVC-2260x1260-1.jpg'
        price='da € 99'
        variant="light"
        bgColor="#fff"
        imageHeight="370px"
        imageHeightMobile="290px"
      />

      <CategoryCard
        title='Tapparelle'
        subtitle='Protezione e comfort.'
        cta='Scopri di più'
        imageSrc={tapparelle}
        variant="light"
        bgColor="#e1e1e2"
        imageHeight="370px"
        imageHeightMobile="320px"
      />



    
      <CategoryGrid
        cards={[
          {
            title: 'Zanzariere',
            subtitle: 'Protezione efficace contro insetti.',
            meta: 'Installazione rapida',
            cta: 'Scopri di più',
            imageSrc: 'https://cdn-it02.markeplay.com/media/images/c43e228275c54b1302049ecd436534449aea5305/image.webp?v=1',
            variant: 'light',
            bgColor: '#fff',
            imageHeight: '260px',
            imageHeightMobile: '400px',
          },
          {
            title: 'Persiane',
            subtitle: 'Sicurezza e isolamento ottimale.',
            meta: 'Materiali resistenti',
            cta: 'Scopri di più',
            imageSrc: 'https://media.adeo.com/media/69319/format/jpeg',
            variant: 'light',
            bgColor: '#fff',
            imageHeight: '260px',
            imageHeightMobile: '320px',
          },
          {
            title: 'Porte Garage',
            subtitle: 'Robuste e funzionali per ogni esigenza.',
            meta: 'Varie finiture disponibili',
            cta: 'Scopri di più',
            imageSrc: 'https://m.media-amazon.com/images/I/61RatuHRxpL._UF894,1000_QL80_.jpg',
            variant: 'light',
            bgColor: '#fff',
            imageHeight: '260px',
            imageHeightMobile: '350px',
          },
          {
            title: 'Porte interne',
            subtitle: 'Design elegante per ogni ambiente.',
            meta: 'Ampia scelta di stili',
            cta: 'Scopri di più',
            imageSrc:'https://www.gaiamiacola.it/wp-content/uploads/2022/02/Porte-Interne-eleganti-25.jpg',
            variant: 'light',
            bgColor: '#fff',
            imageHeight: '260px',
            imageHeightMobile: '300px',
          },
        ]}
      />

      <CategoryCard
        title='Tende da sole'
        subtitle='Protezione e comfort per la tua casa.'
        cta='Scopri di più'
        imageSrc='https://media.adeo.com/mkp/c11f69785be129487a7201d3eb6e8758/media.jpg?width=3000&height=3000&format=jpg&quality=80&fit=bounds'
        variant="light"
        bgColor="#fff"
        imageHeight="450px"
        imageHeightMobile="340px"
      />

      <CategoryCard
        title='Cassonetti'
        subtitle='Protezione e comfort per la tua casa.'
        cta='Scopri di più'
        imageSrc='https://www.infinitoserramenti.it/wp-content/uploads/2024/12/cassonetto-bora-per-finestre.png'
        variant="light"
        bgColor="#f5f6f7"
        imageHeight="350px"
        imageHeightMobile="250px"
      />



        <Footer />
    </>
  )
}

export default App
