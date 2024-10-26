import React from 'react';
 const App=()=>{
  let myObject={name:"Madras"}
  let newObject=myObject
  myObject.name="Chennai"
  let array=["a","e","i","o"]
  let VowelArray=array
  array.push("u");
  const display=()=>{
    alert("Check the Console Output!")
    console.log(myObject.name)
    console.log(array)
  }
  return (
    <div>
      <button onClick={display}>Check</button>
    </div>
  )
 }
export default App;