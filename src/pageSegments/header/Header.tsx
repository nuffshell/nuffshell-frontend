import React from "react";
import cx from "classnames";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Button } from "../../ui";

function Header({ history }: RouteComponentProps) {
  return (
    <header className={cx("bg-red-800", "p-4", "flex", "content-center")}>
      <Link
        to="/"
        className={cx(
          "flex-1",
          "text-yellow-400",
          "hover:text-yellow-300",
          "font-display",
          "text-3xl"
        )}
      >
        nuffshell
      </Link>
      <Button
        onClick={() => history.push("/log-in")}
        className={cx("flex-initial", "mr-4")}
      >
        Log in
      </Button>
      <Button
        onClick={() => history.push("/sign-up")}
        className={cx("flex-initial")}
      >
        Sign up
      </Button>
    </header>
  );
}

export default withRouter(Header);
