import React, { Fragment } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import "react-toastify/ReactToastify.min.css";
import Login from "./views/authentication/login/Login.jsx";
import Index from "./views/index";

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/index" component={Index} />
              <Redirect exact from="/" to="/login" />
            </Switch>
          </BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            limit={1}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default App;
// export default withRouter(App);
