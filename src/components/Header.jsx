// TODO: ricevi le props (title, subtitle) nella firma del componente
import Logo from "./Logo";
function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div>
          {/* TODO: sostituisci il testo fisso con la prop "title" */}
          {/* TODO: sostituisci il testo fisso con la prop "subtitle" */}
          <Logo titolo="React Practice" sottotesto="Progetto sandBox per React-props" />
        </div>

        <nav>
          {/* TODO (extra): passa da App un array di link come prop e genera le <li> */}
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Prodotti</a></li>
            <li><a href="#">Contatti</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
