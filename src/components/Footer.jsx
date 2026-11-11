// TODO: ricevi le props (author, year)
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* TODO: sostituisci i valori fissi con le props "year" e "author" */}
        <p>© 2026 · Realizzato da Nome Autore</p>

        {/* TODO (extra): rendi il <p> qui sopra un componente separato che usa la prop "children" */}
      </div>
    </footer>
  );
}

export default Footer;
