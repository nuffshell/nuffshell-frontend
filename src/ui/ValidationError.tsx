import cx from "classnames";
import React, { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function ValidationError({ id, className, children }: Props) {
  return (
    <div id={id} className={cx(className, "font-semibold", "text-red")}>
      {children}
    </div>
  );
}
