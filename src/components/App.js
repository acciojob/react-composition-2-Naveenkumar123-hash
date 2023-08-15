
import React from "react";
import './../styles/App.css';
import Modal from "./Modal";
import { useState } from "react";

const App = () => {

  const [show,setShow]=useState(true);

  function update(){
    setShow(true);
  }
  return (
    <div className="model-overlay">
        <button onClick={()=>{
          setShow(false)
        }}>Show Modal</button>
        {(false)&&
        <Modal update={update}/>
        }
    </div>
  )
}

export default App
