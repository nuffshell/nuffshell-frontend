import React, { ReactNode } from "react";
import cx from "classnames";

type Props = {
  children: ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <main
      className={cx(
        "p-4",
        "sm:p-8",
        "pb-14",
        "mx-auto",
        "max-w-3xl",
        "lg:max-w-6xl"
      )}
    >
      {children}
    </main>
  );
}
