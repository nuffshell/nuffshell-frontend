import React, { ChangeEvent, MouseEvent } from "react";
import cx from "classnames";
import { Input } from "usetheform";

interface Props {
  id?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "text" | "email" | "password";
  maxLength?: number;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  validation?: any;
}

export default function TextInput({
  id,
  className,
  type,
  maxLength,
  required,
  onChange,
  validation,
}: Props) {
  const validationProp = validation || {};
  return (
    <Input
      id={id}
      name={id}
      className={cx(className, "shadow", "rounded")}
      type={type || "text"}
      maxLength={maxLength}
      required={required || false}
      onChange={onChange}
      touched
      {...validationProp}
    />
  );
}
