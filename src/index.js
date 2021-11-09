import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App/App";
import Form from "./containers/Form/Form";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { informationSell } from "./reducers/informationSellReducer";
import { stepsCounter } from "./reducers/stepsReducer";

const rootReducers = combineReducers({
  informationSell,
  stepsCounter,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sell/:path" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
