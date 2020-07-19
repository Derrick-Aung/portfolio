import React from "react";
import "./App.css";
import {
    AppNavbar,
    Footer,
    About,
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
                    <Route exact path="/" component={Portfolio} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/skills" component={Skills} />
                    {/* <Route exact path="/documents" component={Documents} /> */}
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
