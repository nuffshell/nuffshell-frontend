import cx from "classnames";
import React, { ReactNode } from "react";
import Box from "./Box";

interface Props {
  id?: string;
  className?: string;
  accent?: boolean;
  children: ReactNode;
}

export default function MainHeadline({
  id,
  className,
  accent,
  children,
}: Props) {
  return (
    <Box className={cx("mb-6","pb-2")} accent={accent}>
      <h1
        id={id}
        className={cx(
          className,
          "font-display",
          "text-2xl",
          "md:text-3xl",
          accent ? "text-white" : "text-green"
        )}
      >
        {children}
      </h1>
    </Box>
  );
}
