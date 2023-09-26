import React, {useState} from 'react'
// import {useEffect} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
      //console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
  }
    
    const handleOnChange = (event) => {
        //console.log("Clicked")
        setText(event.target.value);
        console.log(event.target.value);
    }
    
    const [text, setText] = useState("");
    //text = "new text"; //Wrong Way to change the state
    //setText("new Text"); //Correct Way

    return (
<>
  <div className='container'>
    <h2>{props.Heading}</h2>

    <div className="mb-3">
        <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={handleOnChange} id="myBox" rows="5" /> 
    </div>
    
    <button  className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UPPERCASE</button>
    <button  className="btn btn-primary" onClick={handleLoClick} >Convert to Lowercase</button>
  </div>

  <div className="container my-3" >
    <h2> Your Text Summary</h2>
    <p> {text.split(" ").length-1} Words  {text.length} Characters</p>
    <p>{(0.01)*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

  </>
  )
}

Textform.defaultProps = {
    Heading: "Enter Text Below"
}
