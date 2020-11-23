import cx from "classnames";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ModalWindow({ title, children }: Props) {
  return (
    <div
      className={cx(
        "fixed",
        "w-screen",
        "h-screen",
        "bg-black",
        "z-10",
        "bg-opacity-50",
        "flex",
        "items-center",
        "justify-center"
      )}
      style={{ top: 0, left: 0 }}
    >
      <div
        className={cx(
          "w-4/5",
          "sm:w-3/4",
          "shadow",
          "rounded-lg",
          "-mt-48",
          "md:w-1/2",
          "lg:w-1/3"
        )}
      >
        <header className={cx("bg-red-800", "p-4", "rounded-t-lg")}>
          <h1 className={cx("font-semibold", "text-gray-200")}>{title}</h1>
        </header>
        <div className={cx("bg-white", "p-4", "rounded-b-lg")}>{children}</div>
      </div>
    </div>
  );
}
