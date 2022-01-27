import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import Oppening from './components/Oppeing';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Oppening />}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
