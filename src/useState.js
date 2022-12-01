import './App.css';
import {useState} from 'react'

function UseState() {
// function fullName(user){
//   return user.fname + " " + user.lName
// }

// let user = {
//   fname : "Mr.",
//   lName : "Nobody"
// }
// // let name = "anil"
// const [name, setName] = useState('anil')

// const  clickMe = () =>{
//   setName('hari')
// }

// const [count, setCount] = useState(1)
// const numberInc = () => {setCount(count + 1)}
// const numberDec = () => {setCount(count - 1)}

// if(count<=0){
//   numberDec = () => {setCount(1)}
// }
  // let arr = ["anil", "shya", "ghya"]

  const [positionX, setPositionX] = useState(400)
  const [positionY, setPositionY] = useState(200)
  const [borderRadius, setBorderRadius] = useState(0)

  // const clickLeft = () => {setPositionX(positionX - 30)}
  // const clickRight = () => {setPositionX(positionX + 20)}
  // const clickTop = () => {setPositionY(positionY - 10)}
  // const clickBottom = () => {setPositionY(positionY + 20)}
  const makeCircle = () => {setBorderRadius(borderRadius + 30 )}
  const makeSquare = () => {setBorderRadius(borderRadius - 30)}

  const shiftDiv = (movement) => {
    
    setPositionX(400)
    setPositionY(200)
    if(movement==='right' ){
      // setPositionY(200)
      setPositionX(positionX + 100)
    }else if(movement === 'left'){
      // setPositionY(200)
      setPositionX(positionX - 100)
    } else if(movement==='up' ){
      // setPositionX(400)
      setPositionY(positionY - 100)

    }else{
      // setPositionX(400)
      setPositionY(positionY + 100)
    }
  }

  const [backgroungColor, setBackgroundColor] = useState('red')
  const [widthh, setWidth] = useState(300)
  const [height, setHeight] = useState(150)

  const defaultStyleObj = {
    width: '50px',
    height: '50px',
    backgroungColor: 'pink'
  }


  return (

    // <div className = "name"> 
    // <h1>Hello {fullName(user)} </h1>
    // <h1>Hello {name} </h1>

    // <h1>{count} </h1>
    // <div className='count' style={{marginLeft: '47 %'}}>
    //   <button onClick= {numberInc}> + </button> &nbsp; &nbsp;
    //   <button onClick= {numberDec}> - </button>
    // </div>
    // </div>


    // <div className="App">
    //   {
    //   arr.map((item, id) => 
    //         <li> {item + " " + "hello"}</li>
    //       )
          
    //       }
    // </div>
  <>
<div className='center'>
    <div className = "name App" style={{marginLeft: positionX + 'px', marginTop: positionY + 'px', 
    borderRadius: borderRadius + 'px', backgroundColor: backgroungColor, width: widthh +'px',
    height: height+'px'
    }}> 
      <h1>Hello </h1>
      {/* <button onClick={clickLeft}> move left </button> &nbsp; &nbsp;
      <button onClick={clickRight}> move right </button> &nbsp; &nbsp;
      <button onClick={clickTop}> move top </button> &nbsp; &nbsp;
      <button onClick={clickBottom} style={{marginTop: "8px"}}> move bottom </button> &nbsp; &nbsp;
      <button onClick={makeCircle} style={{marginTop: "8px"}}> make circle </button> &nbsp; &nbsp;
      <button onClick={makeSquare} style={{marginTop: "8px"}}> make square</button> */}

      <button onClick={() => positionX === 500 ? null : shiftDiv('right')}> move right </button> &nbsp; &nbsp;
      <button onClick={() => positionX === 300 ? null : shiftDiv('left')}> move left </button> &nbsp; &nbsp;
      <button onClick={() => positionY === 100 ? null : shiftDiv('up')}> move top </button> &nbsp; &nbsp;
      <button onClick={() => positionY === 300 ? null : shiftDiv('bottom')} style={{marginTop: "8px"}}> move bottom </button> &nbsp; &nbsp;
      <button onClick={makeCircle} style={{marginTop: "8px"}}> make circle </button> &nbsp; &nbsp;
      <button onClick={makeSquare} style={{marginTop: "8px"}}> make square</button> 
    </div>


    <div style={defaultStyleObj}>

    </div>

    <input type='text' name='color' placeholder={'type here'} onKeyUp={(e) => {
      setBackgroundColor(e.target.value)
      setWidth(e.target.value)
      setHeight(e.target.value)
      }}></input>
    
</div>

<div>

</div>

</>  

  );
}

export default UseState;

