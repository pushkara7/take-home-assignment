import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import DetailItem from "./DetailItem";
import NavBarComponent from "./NavBar";
import { getData } from "../ducks/actionCreators";
import "../styles/App.css";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <div className="app">
            <NavBarComponent />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/detail" component={DetailItem} />
            </Switch>
        </div>
    );
};

export default App;
