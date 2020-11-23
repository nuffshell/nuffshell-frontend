import cx from "classnames";
import React, { useState, useEffect } from "react";
import {
  getNotificationClassNames,
  Notifier,
  useNotifier,
} from "./features/notifications";
import { useAuthentication } from "./features/authentication";
import { Header } from "./pageSegments/header";
import { HomePage } from "./pages/home";
import { LogInPage } from "./pages/logIn";
import { SignUpPage } from "./pages/signUp";
import { Footer } from "./pageSegments/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { isNotifying } = useNotifier();
  const { handleAuthenticationStateChange } = useAuthentication();
  const [authenticationInitialized, setAuthenticationInitialized] = useState(
    false
  );
  useEffect(() => {
    if (authenticationInitialized) {
      return;
    }
    firebase
      .auth()
      .onAuthStateChanged((user: any) => handleAuthenticationStateChange(user));
    setAuthenticationInitialized(true);
  }, [
    authenticationInitialized,
    setAuthenticationInitialized,
    handleAuthenticationStateChange,
  ]);

  return (
    <div className={cx("app", getNotificationClassNames(isNotifying))}>
      <Router>
        <Header />
        <Switch>
          <Route path="/log-in">
            <LogInPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
        <Notifier />
      </Router>
    </div>
  );
}

export default App;
