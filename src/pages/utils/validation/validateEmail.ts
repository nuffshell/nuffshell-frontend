export default function validateEmail(email: string) {
  return !(email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    ? undefined
    : "Invalid email address!";
}
