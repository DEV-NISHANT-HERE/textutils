//import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message || "Something went Wrong",
      type: type || "info"
    })
    setTimeout( () => {
     setAlert(null);     
    },1500)
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'TextUtils-Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText ="About TextUtils" /> */}
      {/* <Navbar/> */}
      
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>


      <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element={<About mode={mode} />}></Route> */}
        <Textform showAlert={showAlert} Heading= "Enter Your Text" mode={mode}/>

        {/* <Route exact path='/' element={}></Route> */}

      {/* </Routes> */}
      </div>

    {/* </Router> */}
      
    </>
  );
}

export default App;
