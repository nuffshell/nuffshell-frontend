import React from "react";
import cx from "classnames";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Button } from "../../ui";
import { useAuthentication } from "../../features/authentication";

function Header({ history }: RouteComponentProps) {
  const { isLoggedIn, email } = useAuthentication();
  return (
    <header className={cx("bg-brown-dark", "p-4", "flex", "items-center")}>
      <Link
        to="/"
        className={cx(
          "flex-1",
          "text-yellow",
          "hover:text-yellow-300",
          "font-display",
          "font-light",
          "text-3xl",
          "items-center",
          "flex"
        )}
      >
        <img
          className={cx("w-12", "mr-2")}
          src="/images/nuffshell-icon-no-bgr_small.png"
          alt="Nuffshell logo"
        />
        Nuffshell
      </Link>
      {isLoggedIn && <div className={cx("text-brown-lightest")}>{email}</div>}
      {!isLoggedIn && (
        <>
          <Button
            onClick={() => history.push("/log-in")}
            className={cx("flex-initial", "mr-4")}
            accent
          >
            Log in
          </Button>
          <Button
            onClick={() => history.push("/sign-up")}
            className={cx("flex-initial")}
            accent
          >
            Sign up
          </Button>
        </>
      )}
    </header>
  );
}

export default withRouter(Header);
