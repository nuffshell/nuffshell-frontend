import cx from "classnames";

export default function Main({ children }) {
  return (
    <main
      className={cx(
        "p-4",
        "sm:p-8",
        "pb-8",
        "mx-auto",
        "max-w-3xl",
        "lg:max-w-6xl"
      )}
    >
      {children}
    </main>
  );
}
