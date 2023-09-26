//import logo from './logo.svg';
// import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import Textform from './Components/Textform';


function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText ="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils" />
      <div className="container my-3">
      {/* <Textform  Heading= "Enter Your Text" /> */}
      <About/>
      </div>
    </>
  );
}

export default App;
