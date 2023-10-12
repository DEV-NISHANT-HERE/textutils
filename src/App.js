//import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


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
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText ="About TextUtils" /> */}
      {/* <Navbar/> */}
      
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>


      <div className="container my-3">
      {/* <About/> */}
      <Textform showAlert={showAlert} Heading= "Enter Your Text" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
