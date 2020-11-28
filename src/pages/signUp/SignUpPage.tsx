import { Main, MainHeadline } from "../../ui";
import React, { ChangeEvent, FormEvent, RefObject, useState } from "react";
import { Button, Box, TextInput } from "../../ui";
import cx from "classnames";
import { useAuthentication } from "../../features/authentication";

export default function SignUpPage() {
  const { isLoggedIn } = useAuthentication();
  const formRef: RefObject<HTMLFormElement> = React.createRef();
  const password2Ref: RefObject<HTMLInputElement> = React.createRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [status, setStatus] = useState("new");

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleChangePassword2(event: ChangeEvent<HTMLInputElement>) {
    setPassword2(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== password2) {
      // noinspection SpellCheckingInspection
      password2Ref.current?.setCustomValidity(
        navigator.languages[0] === "de"
          ? "Die Eingabe ist nicht dieselbe wie im Passwort-Feld."
          : "This doesn't match the password entered above."
      );
      formRef.current?.reportValidity();
      return;
    }
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
        <form onSubmit={handleSubmit} ref={formRef}>
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
            <label
              className={cx("col-span-2", "sm:col-span-1")}
              htmlFor="email"
            >
              Your email address?
            </label>
            <TextInput
              id="email"
              className={cx("col-span-2")}
              type="email"
              required
              maxLength={200}
              value={email}
              onChange={handleChangeEmail}
            />
            <label
              className={cx("col-span-2", "sm:col-span-1")}
              htmlFor="password"
            >
              Choose a password:
            </label>
            <TextInput
              id="password"
              className={cx("col-span-2")}
              type="password"
              maxLength={200}
              required
              value={password}
              onChange={handleChangePassword}
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
              required
              value={password2}
              onChange={handleChangePassword2}
              ref={password2Ref}
            />
            <div />
            <Button type="submit">Sign up</Button>
          </Box>
        </form>
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
