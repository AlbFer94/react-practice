import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {

  const year = new Date();
  let currentYear = year.getFullYear();

  return (
    <>
      {/* TODO (Header): passa come props il titolo del sito e un sottotitolo */}
      <Header />

      {/* TODO (Main): passa come prop il titolo della sezione (es. "I nostri prodotti") */}
      <Main />

      {/* TODO (Footer): passa come props il nome dell'autore e l'anno */}
      <Footer year={currentYear} author="Alberto Ferullo" />
    </>
  );
}

export default App;
