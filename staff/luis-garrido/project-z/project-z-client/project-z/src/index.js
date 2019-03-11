import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import logic from "./logic";
import "./index.sass";

Object.defineProperties(logic, {
    __userApiToken__: {
        set(token) {
            sessionStorage.setItem("__userApiToken__", token);
        },

        get() {
            return sessionStorage.getItem("__userApiToken__");
        }
    },

    __userApiUsername__: {
        set(username) {
            sessionStorage.setItem("__userApiUsername__", username);
        },

        get() {
            return sessionStorage.getItem("__userApiUsername__");
        }
    }
});

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
