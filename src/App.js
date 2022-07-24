import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlertHandler = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const RedColor = "#8a0606";
  const BlackColor = "#202121";

  const [mode, setDarkMode] = useState("light");

  const darkModeHandler = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = BlackColor;
      document.body.style.transition = "all 500ms";
      showAlertHandler("Dark mode has been enabled", "success");
    }
    if (mode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "all 500ms";
      showAlertHandler("Light mode has been enabled", "success");
    }
  }
  const RedModeHandler = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = RedColor;
      document.body.style.transition = "all 500ms";
      showAlertHandler("Dark mode has been enabled", "success");
    }
    if (mode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "all 500ms";
      showAlertHandler("Light mode has been enabled", "success");
    }
  }


  return (
    <Router>
      <div>
        <Navbar title="Text Utils" about="About" mode={mode} toggleBlackMode={darkModeHandler} toggleRedMode={RedModeHandler} Color={RedColor} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"  element={ <About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text" mode={mode} alertInvoke={showAlertHandler} Color={BlackColor} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
