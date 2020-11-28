import React from "react";
import cx from "classnames";

export default function Footer() {
  return (
    <footer
      className={cx(
        "absolute",
        "bottom-0",
        "bg-brown-dark",
        "p-4",
        "text-brown-lightest",
        "min-w-full"
      )}
    >
      © 2020 Patrick Hund
    </footer>
  );
}
