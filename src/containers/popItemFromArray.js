import Button from "../components/button"
import react, {useState} from 'react'

function PopItemFromArray() {
  const arr = ['anil', 'ashok', 'ram', 'sita']
  // const color = "green"

  const [array, setArray] = useState(arr)

  const popLastItem = () => {
    const arrayCopy = [...array]
    arrayCopy.pop()
    setArray(arrayCopy)
  }

  return (
<>
{
  array.map((item, id) => {
    return <li style={{color: 'red'}}>{item}</li>
  })
}
{/* <Button value = {"login"} bcolor = {"green"} color ={"white"}/> */}
<button onClick={() => {popLastItem()}}>pop item</button>

</>
  );
}

export default PopItemFromArray;
