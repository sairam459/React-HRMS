import React from "react";
import ReactDOM from "react-dom";
import App from "../src/js/components/App";
import { Provider } from "react-redux";
import rootReducer from "./js/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   
      <Route path="/" component={App} />
  
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
