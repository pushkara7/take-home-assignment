import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import App from "./components/App";

ReactDom.render(
    <Provider store={store}>
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    </Provider>,
    document.getElementById("root")
);
