// TODO: ricevi le props (label, variant)
function Button(props) {

  const variant = props.variant;
  const label = props.label;
  const classi = variant ? "btn btn-primary" : "btn btn-secondary";
  const onClick = props.onClick;

  return (
    // TODO: usa la prop "variant" ("primary" | "secondary") per scegliere la classe:
    //       btn-primary oppure btn-secondary
    < button className={classi} onClick={onClick} >
      {/* TODO: sostituisci il testo fisso con la prop "label" */}
      {label}
    </button >
  );
}

export default Button;
