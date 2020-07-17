import React from "react";
import "./App.css";
import {
    AppNavbar,
    Footer,
    Home,
    Documents,
    Portfolio,
    Skills,
} from "./components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <AppNavbar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/skills" component={Skills} />
                    {/* <Route exact path="/documents" component={Documents} /> */}
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
