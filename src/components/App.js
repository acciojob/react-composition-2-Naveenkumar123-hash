
import React from "react";
import './../styles/App.css';
import Modal from "./Modal";
import { useState } from "react";

const App = () => {

  const [show,setShow]=useState(false);

  function update(){
    setShow(false);
  }
  return (
    <div className="model-overlay">
        <button onClick={()=>{
          setShow(true)
        }}>Show Modal</button>
        {(show)&&
        <Modal update={update}/>
        }
    </div>
  )
}

export default App
