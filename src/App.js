import APIDocs from "components/APIDocs/APIDocs";
import Main from "components/Main/Main";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LocationProvider } from "store/store";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	return (
		<LocationProvider>
			<BrowserRouter>
				<div className="max-h-full">
					<NavBar />
					<Switch>
						<Route path="/api">
							<APIDocs />
						</Route>
						<Route exact path="/">
							<Main />
						</Route>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</LocationProvider>
	);
};

export default App;
