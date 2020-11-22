import React from "react";
import cx from "classnames";

export default function Footer() {
  return (
    <footer
      className={cx(
        "absolute",
        "bottom-0",
        "bg-red-800",
        "p-4",
        "text-white",
        "min-w-full"
      )}
    >
      © 2020 Patrick Hund
    </footer>
  );
}
