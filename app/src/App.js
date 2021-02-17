import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Templates/User/User.js';
import Admin from './Templates/Admin/Admin.js';
import Faculty from './Templates/Faculty/Faculty.js';
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
    		<div className="wrapper">
		<Navigation />
      		<h1>Demo for Routing</h1>
		<BrowserRouter>
			<Switch>
				<Route path="/User">	
					<User />
				</Route>
                                <Route path="/Admin">
                                        <Admin />
				</Route>
                                <Route path="/Faculty">
                                        <Faculty />
				</Route>
				<Route path="/">
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
				</Route>
			</Switch>
		</BrowserRouter>
    		</div>
  	);
}

export default App;
