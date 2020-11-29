import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { auth } from "./firebase";
import HomeHeader from "./components/HomeHeader";
import DataForm from "./pages/DataForm";
import AllData from "./pages/AllData";

function App() {
    const [user, setUser] = useState("");
    auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            setUser(authUser);
            //console.log("App1", authUser);
        } else {
            setUser((authUser = false));
            //console.log("App2", authUser);
        }
    });

    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/home">
                        <HomeHeader user={user} />
                        <DataForm user={user} />
                    </Route>alldata

                    <Route path="/alldata">
                        <HomeHeader user={user} />
                        <AllData />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
