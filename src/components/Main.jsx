import Card from "./Card";
import SectionTitle from "./SectionTitle";
import products from "../data/products";

// TODO: ricevi la prop "sectionTitle" nella firma del componente
function Main() {

  return (
    <main className="main">
      <div className="container">
        {/* TODO: sostituisci il testo fisso con la prop "sectionTitle" */}

        <SectionTitle sectionTitle="I Nostri Prodotti" />

        <div className="cards-grid">
          {/* TODO: passa a ogni Card props diverse: title, description, price, image, isNew, buttonText */}

          {products.map(product =>
            <Card key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              isNew={product.isNew}
              price={product.price}
            />
          )}
          {/* TODO (extra): crea un array di oggetti e genera le Card dinamicamente */}
        </div>
      </div>
    </main>
  );
}

export default Main;
