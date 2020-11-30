export default function validateRequiredEmail(email: string) {
  return email && email.trim() !== ""
    ? undefined
    : "Please enter your email address!";
}
