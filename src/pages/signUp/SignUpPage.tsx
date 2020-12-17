import {
  Box,
  Button,
  Main,
  MainHeadline,
  TextInput,
  ValidationError,
} from "../../ui";
import React, { useState } from "react";
import cx from "classnames";
import { useAuthentication } from "../../features/authentication";
import { Form, Collection, useValidation } from "usetheform";
import {
  PasswordState,
  validateEmail,
  validatePasswords,
  validateRequiredEmail,
  validateRequiredPasswords,
} from "../utils/validation";

interface FormState {
  email: string;
  passwords: PasswordState;
}

const initialFormState: FormState = {
  email: "",
  passwords: {
    password: "",
    password2: "",
  },
};

export default function SignUpPage() {
  const [emailStatus, emailValidation] = useValidation([
    validateRequiredEmail,
    validateEmail,
  ]);
  const [passwordsStatus, passwordsValidation] = useValidation([
    validateRequiredPasswords,
    validatePasswords,
  ]);
  const { isLoggedIn } = useAuthentication();
  const [status, setStatus] = useState("new");

  async function handleSubmit({ email, passwords: { password } }: FormState) {
    try {
      await window.firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setStatus("error/email-already-in-use");
          break;
        case "auth/weak-password":
          setStatus("error/weak-password");
          break;
        default:
          setStatus("error/unknown-cause");
      }
      return;
    }
    setStatus("success");
  }

  return (
    <Main>
      <MainHeadline accent>
        {status === "new" && <>Sign up for Nuffshell</>}
        {status.startsWith("error") && <>Something went wrong…</>}
        {status === "success" && <>Success!</>}
      </MainHeadline>
      {status === "new" && !isLoggedIn && (
        <Form onSubmit={handleSubmit} initialState={initialFormState}>
          <Box
            className={cx(
              "grid",
              "grid-cols-1",
              "sm:grid-cols-3",
              "gap-4",
              "md:pl-24",
              "md:pr-24"
            )}
          >
            {emailStatus.error && (
              <ValidationError className={cx("col-span-3")}>
                {emailStatus.error}
              </ValidationError>
            )}
            <label
              className={cx("col-span-2", "sm:col-span-1")}
              htmlFor="email"
            >
              Your email address?
            </label>
            <TextInput
              id="email"
              className={cx("col-span-2")}
              validation={emailValidation}
              maxLength={200}
            />
            {passwordsStatus.error && (
              <ValidationError className={cx("col-span-3")}>
                {passwordsStatus.error}
              </ValidationError>
            )}
            <label
              className={cx("col-span-2", "sm:col-span-1")}
              htmlFor="password"
            >
              Choose a password:
            </label>
            <Collection touched name="passwords" object {...passwordsValidation}>
              <TextInput
                id="password"
                className={cx("col-span-2")}
                type="password"
                maxLength={200}
              />
              <label
                className={cx("col-span-2", "sm:col-span-1")}
                htmlFor="password2"
              >
                Repeat password:
              </label>
              <TextInput
                id="password2"
                className={cx("col-span-2")}
                type="password"
                maxLength={200}
              />
            </Collection>
            <div />
            <Button type="submit">Sign up</Button>
          </Box>
        </Form>
      )}
      {status === "new" && isLoggedIn && <p>You are already logged in.</p>}
      {status === "error/email-already-in-use" && (
        <p>
          Sorry, creating your user account failed – the email you provided is
          already in use.
        </p>
      )}
      {status === "error/weak-password" && (
        <p>
          Sorry, creating your user account failed – the password you provided
          is too short, it needs to be at least 6 characters long.
        </p>
      )}
      {status === "error/unknown-cause" && (
        <p>
          Sorry, creating your user account failed – please reload the page and
          try again.
        </p>
      )}
      {status === "success" && (
        <p>You can now use Nuffshell as an authenticated user.</p>
      )}
    </Main>
  );
}
