import React, { MouseEvent, ChangeEvent, ForwardedRef, forwardRef } from "react";
import cx from "classnames";

interface Props {
  id?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "text" | "email" | "password";
  maxLength?: number;
  required?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function TextInput(
  { id, className, type, maxLength, required, value, onChange }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      id={id}
      className={cx(className, "shadow", "rounded")}
      type={type || "text"}
      maxLength={maxLength}
      required={required || false}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
}
export default forwardRef(TextInput);
