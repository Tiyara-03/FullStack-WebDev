import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        //   console.log("uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText);
   }

   const handleLoClick =()=>{
    //   console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
}

    const handleOnChange =(event)=>{
        // console.log("Onchange");
        setText(event.target.value); //to add values in the text-box
  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

    const[text, setText] = useState('enter text here');
    // setText("new text");
    return (
        <>
        <div className="conatiner">
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>handleExtraSpaces</button>


        </div>
        <div className="container my-4">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} charactera</p>
            <p>{0.008* text.split(" ").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p> 
        </div>
        </>
    )
} 
 