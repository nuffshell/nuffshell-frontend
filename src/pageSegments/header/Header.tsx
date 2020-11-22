import React from "react";
import cx from "classnames";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

function Header({ history }: RouteComponentProps) {
  return (
    <header className={cx("bg-red-800", "p-4", "text-white", "flex")}>
      <Link to="/" className={cx("flex-1")}>
        nuffshell
      </Link>
      <button
        onClick={() => history.push("/log-in")}
        className={cx("flex-initial", "mr-8")}
      >
        Log in
      </button>
      <button
        onClick={() => history.push("/sign-up")}
        className={cx("flex-initial")}
      >
        Sign up
      </button>
    </header>
  );
}

export default withRouter(Header);
