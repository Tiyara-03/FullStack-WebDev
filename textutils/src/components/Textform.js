import React, { useState } from 'react'

export default function Textform(props) {
    const handleClickUp =()=>{
        let newText = text.toUpperCase();
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
            <button className="btn btn-primary" onClick={handleClickUp}>Convert to uppercase</button>

        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}
