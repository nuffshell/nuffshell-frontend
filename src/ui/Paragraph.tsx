import cx from "classnames";
import React, { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Paragraph({ id, className, children }: Props) {
  return (
    <p id={id} className={cx(className, "mb-4")}>
      {children}
    </p>
  );
}
