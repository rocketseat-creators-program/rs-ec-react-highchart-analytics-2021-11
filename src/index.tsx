import ReactDOM from "react-dom";

import "./index.css";

import { StrictMode } from "react";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
