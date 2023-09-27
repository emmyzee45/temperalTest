import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ToastContainer /> */}
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
