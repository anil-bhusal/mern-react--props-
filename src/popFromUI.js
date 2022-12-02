import Button from "../components/button"
import react, {useState} from 'react'

function PopFromUI() {
  const arr = ['anil', 'ashok', 'ram', 'sita']
  // const color = "green"
  const [array, setArray] = useState(arr)
  const [name, setName] = useState(null)

  const popLastItem = () => {
    const arrayCopy = [...array]
    if (arrayCopy.includes(name)===true)
    {      
      arrayCopy.splice(arrayCopy.indexOf(name), 1 )
      setArray(arrayCopy)
    }
  }

  
  return (
<>
{
  array.map((item, id) => {
    return <li style={{color: 'red'}}>{item}</li>
  })
}

{/* <Button value = {"login"} bcolor = {"green"} color ={"white"}/> */}
<input type="text" onKeyUp={(event) => {setName(event.target.value)}} />
<button onClick={() => {popLastItem()}}>pop item</button>
{/* <input type="submit"/> */}

</>
  );
}

export default PopFromUI;
