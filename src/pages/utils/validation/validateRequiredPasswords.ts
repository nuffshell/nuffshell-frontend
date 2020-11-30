import PasswordState from "./PasswordState";

export default function validateRequiredPasswords({
  password,
  password2,
}: PasswordState) {
  return password &&
    password.trim() !== "" &&
    password2 &&
    password2.trim() !== ""
    ? undefined
    : "Please fill out the password fields!";
}
