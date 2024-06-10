import React, { useState } from 'react'

export default function Textform(props) {
    const handleClickUp =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClickdwn =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclear =()=>{
        let newText = "";
        setText(newText);
    }


    const handleOnChange =(event) =>{
        setText(event.target.value);
    }


    const [text, setText] = useState('enter text here');
    // setText('new text');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClickUp}>Convert to uppercase</button>
        
            <button className="btn btn-primary mx-2" onClick={handleClickdwn}>Convert to Lowecase</button>

            <button className="btn btn-primary" onClick={handleclear}>Clear Text</button>


        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>

            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} Minutes Read </p>
            <h3>Preview</h3> <p>{text} </p>
        </div>
        </>
    )
}
