import cx from "classnames";
import React, { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Box({ id, className, children }: Props) {
  return (
    <div
      id={id}
      className={cx(
        className,
        "border-solid",
        "border-4",
        "border-red-200",
        "p-4",
        "rounded-lg"
      )}
    >
      {children}
    </div>
  );
}
