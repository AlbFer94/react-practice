import Card from "./Card";

// TODO: ricevi la prop "sectionTitle" nella firma del componente
function Main() {
  return (
    <main className="main">
      <div className="container">
        {/* TODO: sostituisci il testo fisso con la prop "sectionTitle" */}
        <h2 className="section-title">Titolo sezione</h2>

        <div className="cards-grid">
          {/* TODO: passa a ogni Card props diverse: title, description, price, image, isNew, buttonText */}
          <Card />
          <Card />
          <Card />

          {/* TODO (extra): crea un array di oggetti e genera le Card dinamicamente */}
        </div>
      </div>
    </main>
  );
}

export default Main;
