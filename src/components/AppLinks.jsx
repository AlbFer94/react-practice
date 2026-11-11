
function AppLinks(props) {

    const testo = props.testo;
    const url = props.url;

    return (
        <li>
            <a href={url}>{testo}</a>
        </li>
    )
}

export default AppLinks;