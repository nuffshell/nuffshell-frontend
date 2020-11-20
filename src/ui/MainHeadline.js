import cx from "classnames";

export default function MainHeadline({ id, className, children }) {
  return (
    <h1
      id={id}
      className={cx(
        className,
        "text-xl",
        "md:text-3xl",
        "font-bold",
        "text-red-800",
        "border-solid",
        "border-4",
        "border-red-200",
        "p-4",
        "rounded-lg"
      )}
    >
      {children}
    </h1>
  );
}
