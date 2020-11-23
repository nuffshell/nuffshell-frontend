import React, { MouseEvent, ReactNode } from "react";
import cx from "classnames";

interface Props {
  id?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  id,
  className,
  children,
  onClick,
  type,
}: Props) {
  return (
    <button
      type={type || "button"}
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
        "h-10",
        "bg-yellow-400",
        "hover:bg-yellow-300"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
