import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Button from 'react-bootstrap/Button';

import Navigation from './Templates/Navigation.js';

function App() {
  const [testMessage, setTestMessage] = useState();

  //This function grabs data from flasks "/test" route and stores it in testMessage
  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
      setTestMessage(data.message);
    });
  }, [])

  return (
    <div>
      <Navigation/>
      <div>
        <p>This is the message: {testMessage}</p>
        <div>Welcome to a pure skeleton of what will soon become a TA Assignment application</div>
        <div>Please select your role</div>
        <Button className="m-2">UTA</Button>
        <Button className="m-2">PTIG</Button>
        <Button className="m-2">Grad-TA</Button>
        <Button className="m-2">Faculty</Button>
        <Button className="m-2">Admin</Button>
        <Button className="m-2">Super-User</Button>
      </div>
    </div>
  );
}

export default App;
