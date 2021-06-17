import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from "./pages/Home";
import EnglishService from "./pages/EnglishService";
import Progresssing from "./Components/Progressing";
function App() {
	return (<BrowserRouter>
		<Switch>
			<Route exact path="/" component={withRouter(Home)} />
			<Route exact path="/English" component={withRouter(EnglishService)} />
			<Route exact path="/Kannada" component={withRouter(Progresssing)} />
		</Switch>
	</BrowserRouter>
	)
}
export default App;
