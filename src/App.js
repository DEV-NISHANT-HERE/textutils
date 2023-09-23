//import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText ="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils" />
      <div className="container my-3">
      <Textform  Heading= "Enter Your Text" />
      </div>
    </>
  );
}

export default App;
