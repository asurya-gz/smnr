import classnames from "classname";

export default function Button({ className, href, variant, children, pill }) {
  const variants = {
    "outline-yellow":
      "border border-yellow-button border-2 text-yellow-button hover:text-black hover:bg-yellow-500",
    "outline-blue":
      "border border-hover-nav border-2 text-hover-nav text-center hover:text-black hover:bg-hover-nav inline-block w-full",
    "fill-yellow": `bg-yellow-button text-black hover:bg-yellow-600`,
  };

  const pickedVariant = variants[variant];

  return (
    <div>
      <a
        href={href}
        className={classnames(
          "py-3 px-4 text lg:text-xl font-sans",
          pill && "rounded",
          pickedVariant,
          className
        )}
      >
        {children}
      </a>
    </div>
  );
}