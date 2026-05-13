function Button(props) {
  const isPrimary = props.type === "primary";

  return (
    <button className={`btn ${isPrimary ? "primary" : "secondary"}`}>
      {props.label}
    </button>
  );
}

export default Button;

