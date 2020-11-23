import React, { ReactNode } from "react";
import cx from "classnames";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <main
      className={cx(
        "pt-4",
        "pl-4",
        "pr-4",
        "sm:pt-8",
        "sm:pl-8",
        "sm:pr-8",
        "pb-16",
        "mx-auto",
        "max-w-3xl"
      )}
    >
      {children}
    </main>
  );
}
