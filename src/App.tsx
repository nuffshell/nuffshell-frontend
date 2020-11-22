import cx from "classnames";
import React from "react";
import {
  getNotificationClassNames,
  Notifier,
  useNotifier,
} from "./features/notifications";
import { Header } from "./pageSegments/header";
import { HomePage } from "./pages/home";
import { LogInPage } from "./pages/logIn";
import { SignUpPage } from "./pages/signUp";
import { Footer } from "./pageSegments/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { isNotifying } = useNotifier();

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
        <Footer/>
        <Notifier />
      </Router>
    </div>
  );
}

export default App;
