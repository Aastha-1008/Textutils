import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import  {useState} from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
  const removebodyclasses=()=>{
    document.body.classList.remove('bg-Light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')


  }
  const togglemode = (cls) => {
    removebodyclasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils2" About="about" Mode={mode} togglemode ={togglemode} / >
        <Alert alert={alert}/>
        <div className="container">
       <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
  <Route exact path="/">
              <TextForm  showAlert={showAlert} heading =" Textutils - Word Counter, character counter" Mode={mode}/>
</Route>
</Switch>

        </div> 
      </Router>
    </>
  );
}

export default App;
