import { Box, Button, Main, MainHeadline, TextInput } from "../../ui";
import React, { ChangeEvent, FormEvent, useState } from "react";
import cx from "classnames";
import { useAuthentication } from "../../features/authentication";

export default function LogInPage() {
  const { isLoggedIn } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("new");

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await window.firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setStatus("error/user-not-found");
          break;
        case "auth/wrong-password":
          setStatus("error/wrong-password");
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
        <form onSubmit={handleSubmit}>
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
              Your password?
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
            <div />
            <Button type="submit">Log in</Button>
          </Box>
        </form>
      )}
      {status === "new" && isLoggedIn && <p>You are already logged in.</p>}
      {status === "error/user-not-found" && (
        <p>
          Sorry, there is no Nuffshell user with email address <em>{email}</em>.
        </p>
      )}
      {status === "error/wrong-password" && (
        <p>Sorry, that password is incorrect.</p>
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
