import React, { MouseEvent, ReactNode } from "react";
import cx from "classnames";

interface Props {
  id?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  accent?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  id,
  className,
  children,
  onClick,
  accent,
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
        accent ? "text-black" : "text-white",
        "w-24",
        "h-10",
        accent ? "bg-yellow" : "bg-green",
        accent ? "hover:bg-yellow-light" : "hover:bg-green-light"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
