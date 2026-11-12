0// Dati dei prodotti per le Card.
// I nomi delle chiavi corrispondono alle props previste in Card.jsx.
// "image" punta a public/: in Vite i file di public/ si servono dalla radice ("/").
const products = [
  {
    id: 1,
    title: "T-shirt Basic",
    description: "Maglietta in cotone 100%, vestibilità regolare.",
    price: 14.90,
    image: "/images/products/t-shirt.svg",
    isNew: false,
    buttonText: "Aggiungi al carrello",
  },
  {
    id: 2,
    title: "Felpa con cappuccio",
    description: "Felpa felpata con tasca a marsupio e coulisse.",
    price: 39.90,
    image: "/images/products/hoodie.svg",
    isNew: true,
    buttonText: "Aggiungi al carrello",
  },
  {
    id: 3,
    title: "Jeans Slim Fit",
    description: "Denim elasticizzato, lavaggio medio.",
    price: 49.90,
    image: "/images/products/jeans.svg",
    isNew: false,
    buttonText: "Scopri di più",
  },
  {
    id: 4,
    title: "Giacca in pelle",
    description: "Giacca con zip centrale e collo in montone sintetico.",
    price: 129.0,
    image: "/images/products/jacket.svg",
    isNew: true,
    buttonText: "Scopri di più",
  },
  {
    id: 5,
    title: "Vestito a pois",
    description: "Abito estivo a spalline sottili, tessuto leggero.",
    price: 59.50,
    image: "/images/products/dress.svg",
    isNew: false,
    buttonText: "Aggiungi al carrello",
  },
  {
    id: 6,
    title: "Cappellino da baseball",
    description: "Visiera curva e chiusura regolabile.",
    price: 19.90,
    image: "/images/products/cap.svg",
    isNew: true,
    buttonText: "Aggiungi al carrello",
  },
];

export default products;
