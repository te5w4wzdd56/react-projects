import React from 'react';
const app2=()=>{
  const name1="Ajay";
  const name2="Ajay";
  const obj1={name:"Ajay"}
  const obj2={name:"Ajay"}
  if(name1===name2)
  {
    alert(true);
  }else{
    alert(false);
  }
  if(obj1.name === obj2.name)
  {
    alert(true);
  }else{
    alert(false);
  }
}
 const App=()=>{
  return(
    <div>
      <button onClick={app2}>Click</button>
      {/*<p>This is World Functional Component</p>*/}
    </div>
  )
 }


export default App;