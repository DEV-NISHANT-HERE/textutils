import React, {useState} from 'react'
// import {useEffect} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleClearClick = () => {
      //console.log("Uppercase was clicked");
      let newText = "";
      setText(newText);
      props.showAlert("Cleared Textarea","success");
      
  }

    const handleLoClick = () => {
      //console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }

  const handleCopy = () => {
    console.log('I am a copy');
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed Extra Spaces","success");
}
    
    const handleOnChange = (event) => {
        //console.log("Clicked")
        setText(event.target.value);
        // console.log(event.target.value);
    }

    
    
    const [text, setText] = useState("");
    //text = "new text"; //Wrong Way to change the state
    //setText("new Text"); //Correct Way

    return (
      <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>

  <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h2>{props.Heading}</h2>

    <div className="mb-3">
        <textarea className="form-control" 
        style = {{backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
      }} 
       value={text} onChange={handleOnChange} id="myBox" rows="5" /> 
    </div>
    
    <button  className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UPPERCASE</button>
    <button  className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
    <button  className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
    <button  className="btn btn-primary mx-1" onClick={handleCopy} >Copy to Clipboard</button>
    <button  className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
  </div>

  <div className="container my-3" >
    <h2> Your Text Summary</h2>
    <p> {text.split(" ").length-1} Words  {text.length} Characters</p>
    <p>{(0.01)*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter Something in the textbox to preview here"}</p>
  </div>
      </div>


  
  )
}

Textform.defaultProps = {
    Heading: "Enter Text Below"
}
