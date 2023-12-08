import React, { useState } from "react";
import { ReactDOM } from "react";

const UseState=()=>{

    // const [bool,setBool]=useState(false);
    // const handleClick=()=>{
    //     setBool(!bool)
    // } 

    const [text,setText]=useState('Anish');
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleClicks=()=>{

    }
    
    return(
        <div>
            {/* { bool? 'state is true' : 'state is false'}
            <button onClick={handleClick}>Click me</button>
            <br/> */}
            {text}
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleClicks}>Click me</button>
        </div>
    )
}

export default UseState;