// TODO: ricevi le props (title, subtitle) nella firma del componente
import Logo from "./Logo";
import AppLinks from "./AppLinks";
import links from "../data";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div id="logo-titolo">
          {/* TODO: sostituisci il testo fisso con la prop "title" */}
          {/* TODO: sostituisci il testo fisso con la prop "subtitle" */}
          <Logo titolo="React Practice" sottotesto="Progetto sandBox per React-props" />
        </div>

        <nav>
          {/* TODO (extra): passa da App un array di link come prop e genera le <li> */}

          <ul className="nav-list">
            {links.map(element =>
              <AppLinks key={element.id} testo={element.text} url={element.url} />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
