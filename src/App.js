import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import Home from "./components/Home";
// import Header from "./components/Header";
// import ErrorPage from "./components/ErrorPage";
function App() {
const [mode, setMode] = useState('light');
  const [setText, update] = useState('');
  const handled = (event) => {
    update(setText.concat(event.target.value))
  }
  const cleared =() => {
    update('');
  }
  const resulted = () => {
    update(eval(setText).toString())
  }
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.getElementsByTagName('body')[0].style.backgroundColor = newMode === 'dark' ? 'black' : 'white';
  }
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <Header />

    //             <Home />
    //           </>
    //         }
    //       />
    //       <Route
    //         path="about"
    //         element={
    //           <>
    //             <Header />

    //             <About />
    //           </>
    //         }
    //       />
    //       <Route path="*" element={<ErrorPage />} />
    //     </Routes>
    //   </Router>
    // </>
    <>
    <div className="calc"> 
    <input type="text" placeholder="0" id="answer" value={setText}/>
    <input type="button" value="9" className="btn" onClick={handled}/>
    <input type="button" value="8" className="btn" onClick={handled}/>
    <input type="button" value="7" className="btn" onClick={handled}/>
    <input type="button" value="6" className="btn" onClick={handled}/>
    <input type="button" value="5" className="btn" onClick={handled}/>
    <input type="button" value="4" className="btn" onClick={handled}/>
    <input type="button" value="3" className="btn" onClick={handled}/>
    <input type="button" value="2" className="btn" onClick={handled}/>
    <input type="button" value="1" className="btn" onClick={handled}/>

    <input type="button" value="0" className="btn" onClick={handled}/>
    <input type="button" value="+" className="btn" onClick={handled}/>
    <input type="button" value="-" className="btn" onClick={handled}/>
    <input type="button" value="/" className="btn" onClick={handled}/>
    <input type="button" value="*" className="btn" onClick={handled}/>
    <input type="button" value="." className="btn" onClick={handled}/>
    <input type="button" value="%" className="btn" onClick={handled}/>

    <input type="button" value="Clear" placeholder="." className="btn btn1" onClick={cleared}/>
    <input type="button" value="=" placeholder="." className="btn btn1" onClick={resulted}/>

    </div>


    <button className="toggle" onClick={toggleMode}>Toggle {mode === 'light' ? 'Night' : 'Light'} Mode</button>
    </>
  );
}

export default App;
