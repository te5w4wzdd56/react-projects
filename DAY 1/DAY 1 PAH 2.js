import React from 'react';


 const App=()=>{
  let name="Ajay"
  let age=20
  let setStatus=false
  let userDefault=undefined
  let resopnseValue=null
  const display=()=>{
    console.log(name)
    console.log(age)
    console.log(setStatus)
    console.log(userDefault)
    console.log(resopnseValue)
    dis()
  }
  const dis=()=>{
    alert("Check the Console Output!")
    let newname=name;
    name="ANBARASU";
    console.log(name)
    let newage=name;
    age=10;
    console.log(age)
  }
  return (
    <div>
      <button onClick={display}>Check</button>
    </div>
  )
 }
export default App;