import React from 'react'

export default function Textform(props) {
  return (
    <form>
        <h1>{props.Heading}</h1>
    <div className="mb-3">
      {/* <label htmlFor="myBox" className="form-label">Email address</label> */}
      <textarea type="text" className="form-control" id="myBox" aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    
    <button type="submit" className="btn btn-primary">Convert to Uppercase</button>
  </form>
  )
}

Textform.defaultProps = {
    Heading: "Enter Text Below"
}
