import { useState } from 'react';
const Login =()=> {
  const [arr, setArr] = useState(['ram','hari','geeta','shyam']);
  const [inputText, setInputText] = useState('')

  const saveName = (input) => {
    setInputText(input)
  }
  
  const deleteItem = () => {
    const removedArr = arr.filter((item, id) => {
      return item !== inputText
    })
    setArr(removedArr)
  };

  return (
    <>
    {arr.map((item, id) => {
      return <li> {item} </li>;
    })}

    <input
          type="text"
          placeholder={'enter your name'}
          onKeyUp = {(event) => {saveName(event.target.value)}}
          >
    </input> &nbsp;
    <button onClick ={() => deleteItem()}>delete</button>
   </>
  );
};
  



export default Login;