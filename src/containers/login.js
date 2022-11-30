import Button from "../components/button"

function Login() {
  const arr = ['anil', 'ashok', 'ram']
  const color = "green"

  // const [style, setStyle] = {color}

  return (
<>
{
  arr.map((item, id) => {
    return <li style={{color: color}}> item</li>
  })
}
<Button value = {"login"} bcolor = {"green"} color ={"white"}/>
</>
  );
}

export default Login;
