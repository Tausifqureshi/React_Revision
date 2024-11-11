import React from "react";
import { Provider } from "react-redux";
import CounterRedux from "./CounterRedux";
import store from "./store";

function Redux() {
  return (
    <div>
      <h1> Redux Tutorial </h1>
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    </div>
  );
}

export default Redux;
