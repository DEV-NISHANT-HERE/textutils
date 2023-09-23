import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText("You have clicked on handleUpClick");
    }
    
    const handleOnChange = (event) => {
        console.log('OnChange');
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    //text = "new text"; //Wrong Way to change the state
    //setText("new Text"); //Correct Way

    return (
<form>
    <h1>{props.Heading}</h1>

    <div className="mb-3">
        <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={handleOnChange} id="myBox" rows="5" /> 
    </div>
    
    <button  className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
  </form>
  )
}

Textform.defaultProps = {
    Heading: "Enter Text Below"
}
