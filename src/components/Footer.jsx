// TODO: ricevi le props (author, year)
function Footer(props) {

  const year = props.year;
  const author = props.author;
  return (
    <footer className="footer">
      <div className="container">
        {/* TODO: sostituisci i valori fissi con le props "year" e "author" */}
        <p>© {year} · Realizzato da {author}</p>

        {/* TODO (extra): rendi il <p> qui sopra un componente separato che usa la prop "children" */}
      </div>
    </footer>
  );
}

export default Footer;
