import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
