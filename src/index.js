import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers/reducer";

// import Bootstarp css / js files
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

// import datepicker css file
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);
