
function Button(props) {
  return (
<>
<button style={{backgroundColor: props.bcolor, color : props.color}}> {props.value} </button>
</>
  );
}

export default Button;
