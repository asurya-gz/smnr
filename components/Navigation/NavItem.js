import classnames from "classname";

export default function NavItem({ children, style }) {
  return (
    <li>
      <a
        className={classnames(
          "text-lg font-medium md:font-sans text-white pr-10 hover:text-hover-nav",
          style
        )}
      >
        {children}
      </a>
    </li>
  );
}