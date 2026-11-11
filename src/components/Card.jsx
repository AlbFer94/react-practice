import Button from "./Button";

// TODO: ricevi le props (title, description, price, image, isNew, buttonText)
function Card() {
  return (
    <article className="card">
      {/* TODO: mostra il badge SOLO se la prop "isNew" è true */}
      <span className="card-badge">Nuovo</span>

      {/* TODO: sostituisci il riquadro con un <img> che usa la prop "image" (e "title" come alt) */}
      <div className="card-image">Immagine</div>

      <div className="card-body">
        {/* TODO: prop "title" */}
        <h3 className="card-title">Titolo card</h3>

        {/* TODO: prop "description" */}
        <p className="card-description">Breve descrizione del contenuto della card.</p>

        {/* TODO: prop "price" (prova anche a formattarla, es. 19.90 → "€ 19,90") */}
        <p className="card-price">€ 0,00</p>

        {/* TODO: inoltra a Button la prop "buttonText" della Card (prop drilling) */}
        <Button />
      </div>
    </article>
  );
}

export default Card;
