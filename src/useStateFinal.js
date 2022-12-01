
import './App.css';
import {useState} from 'react'

function UseStateFinal() {
  const defaultStyleObj = {
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    marginLeft: '50px',
    color: 'black',
    padding: '5px'
  }

  const [style, setStyle] = useState(defaultStyleObj)

  let changeStyle = (inputText) => {
    const styl = {...defaultStyleObj}
    const splitted = inputText.split('=')
    styl[splitted[0]] = splitted[1]
    if(splitted[1])
      setStyle(styl)
    else
      setStyle(defaultStyleObj)
  }

  return (
    <div className='center'>
        <div style={style}> hello
        </div>
        
        <input type='text' name='color' placeholder={'type here'} onKeyUp={(event) => {
          changeStyle(event.target.value)
        }}></input>

    </div>  
  );
}

export default UseStateFinal;
