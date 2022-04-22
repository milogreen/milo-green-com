import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import './App.scss';
import Revolute from "./components/Revolute";
import Resume from "./components/Resume";
import Plotter from "./components/Plotter";
import Contact from "./components/Contact";
import Wallet from "./components/Wallet";
import Projects from "./components/Projects";

class App extends Component {
	render() {
		return (
			<>
				<Router>
				<Routes>
					<Route exact path="/" element={<LandingPage />}/>
					<Route exact path="/revolute" element={<Revolute />} />
					<Route path="/plotter" element={<Plotter />} />
					<Route path="/wallet" element={<Wallet />} />
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />} />
				</Routes>
				</Router>
			</>
		);
	};
};

export default App;
