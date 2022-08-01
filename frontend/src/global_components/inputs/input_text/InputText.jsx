import "./inputStyle.css";

export const InputText = (props) => {
  if (props.error) {
    return (
      <input placeholder={props.placeholder} value={props.value} onChange={props.onchange} className="error" />
    );
  }
  return <input placeholder={props.placeholder} value={props.value} onChange={props.onchange} className="normal" />;
  
};