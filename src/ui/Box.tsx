import cx from "classnames";
import React, { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  accent?: boolean;
  children: ReactNode;
}

export default function Box({ id, className, accent, children }: Props) {
  return (
    <div
      id={id}
      className={cx(
        className,
        accent && "bg-green",
        accent && "shadow",
        !accent && "border-solid",
        !accent && "border-2",
        !accent && "border-green-light",
        "p-4",
        "rounded-lg"
      )}
    >
      {children}
    </div>
  );
}
