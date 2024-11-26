import React from "react";
import ReduxThunkExample from "./ReduxThunkExample";
import { Provider } from "react-redux";
// import { store } from "./store";
import { store } from "./store";

function ReduxThunk() {
  return (
    <div>
      <h1> Redux Thunk </h1>
      <Provider store={store}>
        <ReduxThunkExample />
      </Provider>
    </div>
  );
}

export default ReduxThunk;
