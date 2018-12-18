import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./layout/main/main";
import {PATHS} from "./constants/routes";
import Main from "./containers/todos/main";
import Login from "./containers/login/login";
import SingUp from "./containers/sing_up/sing_up";

class App extends Component {
	

	render() {
		return ( <div className="header">
			<BrowserRouter>
				<div>
					<MainLayout>
						<Switch>
							<Route exact path={PATHS.INDEX} component={Main} />
							<Route exact path={PATHS.TODOS} component={Main} />
							<Route exact path={PATHS.SING_UP} component={SingUp} />
							<Route exact path={PATHS.LOGIN} component={Login} />
						</Switch>
					</MainLayout>
				</div>
			</BrowserRouter>
			</div>
		);
	}
}

export default App;
