import React from "react";

const Modal=({update})=>{


    return (
        <div>
            <button onClick={update}className="model-close">Close</button>
            <p className="model-p">This is the content of the modal.</p>
        </div>
    )
}
export default Modal