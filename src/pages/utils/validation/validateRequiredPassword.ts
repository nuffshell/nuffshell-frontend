export default function validateRequiredPasswords(password: string) {
  return password && password.trim() !== ""
    ? undefined
    : "Please fill out the password field!";
}
