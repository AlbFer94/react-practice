import Button from "./Button";

// TODO: ricevi le props (title, description, price, image, isNew, buttonText)
function Card(props) {

  const cardEelements =
  {
    title: props.title,
    image: props.image,
    description: props.description,
    price: props.price,
    isNew: props.isNew
  }


  return (
    <article className="card">
      {/* TODO: mostra il badge SOLO se la prop "isNew" è true */}
      {cardEelements.isNew && <span className="card-badge">New</span>}

      {/* TODO: sostituisci il riquadro con un <img> che usa la prop "image" (e "title" come alt) */}
      <div className="card-image">
        <img src={cardEelements.image} alt={cardEelements.title} />
      </div>

      <div className="card-body">
        {/* TODO: prop "title" */}
        <h3 className="card-title">{cardEelements.title}</h3>

        {/* TODO: prop "description" */}
        <p className="card-description">{cardEelements.description}</p>

        {/* TODO: prop "price" (prova anche a formattarla, es. 19.90 → "€ 19,90") */}
        <p className="card-price">€ {cardEelements.price}</p>

        {/* TODO: inoltra a Button la prop "buttonText" della Card (prop drilling) */}
        {/* DONE: Non ho usato prop drilling ma ho gestito la casistica delle classi per il button con un boolean e ternario */}
        <Button variant={false} label="Scopri di Più" />
        <Button variant={true} label="Aggiungi al Carrello" />
      </div>
    </article>
  );
}

export default Card;
