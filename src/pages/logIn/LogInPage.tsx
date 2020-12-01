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
import Form, { useValidation } from "usetheform";
import {
  validateEmail,
  validateRequiredEmail,
  validateRequiredPassword,
} from "../utils/validation";

interface FormState {
  email: string;
  password: string;
}

const initialFormState: FormState = {
  email: "",
  password: "",
};

export default function LogInPage() {
  const [emailStatus, emailValidation] = useValidation([
    validateRequiredEmail,
    validateEmail,
  ]);
  const [passwordStatus, passwordValidation] = useValidation([
    validateRequiredPassword,
  ]);
  const { isLoggedIn } = useAuthentication();
  const [status, setStatus] = useState("new");

  async function handleSubmit({ email, password }: FormState) {
    try {
      await window.firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          setStatus("error/bad-credentials");
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
        {status === "new" && <>Log in to Nuffshell</>}
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
            {passwordStatus.error && (
              <ValidationError className={cx("col-span-3")}>
                {passwordStatus.error}
              </ValidationError>
            )}
            <label
              className={cx("col-span-2", "sm:col-span-1")}
              htmlFor="password"
            >
              Your password?
            </label>
            <TextInput
              id="password"
              className={cx("col-span-2")}
              type="password"
              validation={passwordValidation}
              maxLength={200}
            />
            <div />
            <Button type="submit">Log in</Button>
          </Box>
        </Form>
      )}
      {status === "new" && isLoggedIn && <p>You are already logged in.</p>}
      {status === "error/bad-credentials" && (
        <p>Sorry, email or password are incorrect.</p>
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
