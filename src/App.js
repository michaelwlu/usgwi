import NavBar from "./components/NavBar/NavBar";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "components/Main/Main";
import APIDocs from "components/APIDocs/APIDocs";
import NoMatch from "components/NoMatch/NoMatch";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route>
					<APIDocs />
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
