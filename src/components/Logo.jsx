function Logo(props) {

    const titolo = props.titolo;
    const sottotesto = props.sottotesto;

    return (
        <figure>
            <img src="\React.png" alt="Logo di React" />
            <h1 className="header-title">{titolo}</h1>
            <p className="header-subtitle">{sottotesto}</p>
        </figure>
    )
}

export default Logo;