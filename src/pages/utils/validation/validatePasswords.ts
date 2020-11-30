import PasswordState from "./PasswordState";

export default function validatePasswords({
  password,
  password2,
}: PasswordState) {
  return password === password2
    ? undefined
    : "The passwords you entered do not match!";
}
