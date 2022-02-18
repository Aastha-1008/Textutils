import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import  {useState} from 'react';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null)
    },1500);
  }

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title="Textutils - Dark Mode";
      // setText("Enable Light Mode")
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // setText("Enable Dark Mode")
      document.title="Textutils - Light Mode"; 
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      {/*<Router>*/}
        <Navbar title="Textutils2" About="about" Mode={mode} togglemode ={togglemode} / >
        <Alert alert={alert}/>
        <div className="container">
       {/*} <Switch>
            <Route exact path="/about">
              <About />
            </Route>
  <Route exact path="/">*/}
              <TextForm  showAlert={showAlert} heading ="Enter the text to analyze" Mode={mode}/>
{/*</Route>}
</Switch>*/}

        </div> 
      {/*</Router>*/}
    </>
  );
}

export default App;
