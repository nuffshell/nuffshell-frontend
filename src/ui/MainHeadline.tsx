import cx from "classnames";
import React, { ReactNode } from "react";
import Box from "./Box";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function MainHeadline({ id, className, children }: Props) {
  return (
    <Box className={cx("mb-6")}>
      <h1
        id={id}
        className={cx(
          className,
          "font-display",
          "text-xl",
          "md:text-3xl",
          "text-red-800"
        )}
      >
        {children}
      </h1>
    </Box>
  );
}
