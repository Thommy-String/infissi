import CategoryCard from './components/CategoryCard'
import CategoryGrid from './components/CategoryGrid'
import pvcInfisso from './assets/images/pvcInfisso.png'
import tapparelle from './assets/images/tapparelle.png'



function App() {
  

  return (
    <>
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

    </>
  )
}

export default App
