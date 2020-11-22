import React, { ReactNode, MouseEvent } from "react";
import cx from "classnames";

type Props = {
  id?: string;
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export default function Button({ id, className, children, onClick }: Props) {
  return (
    <button
      id={id}
      className={cx(
        className,
        "pl-2",
        "pr-2",
        "pt-1",
        "pb-1",
        "rounded",
        "shadow",
        "text-black",
        "w-24",
        "bg-yellow-400",
        "hover:bg-yellow-300"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
