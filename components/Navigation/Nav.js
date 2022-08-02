import classnames from "classname";
import NavItem from "./NavItem";

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-end space-x-4",
    vertical: "flex-col space-y-5",
  };

  const pickedDir = dirs[dir];
  var hiddenNormalLogin = false;

  // tujuan
  // agar tombol login normal hilang digantikan tombol login border biru
  if (dir === "vertical") {
    hiddenNormalLogin = true;
  } else {
    hiddenNormalLogin = false;
  }

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem>Home</NavItem>
      {/* Dropdown */}
      <div className="group inline-block relative">
        <button className="text-lg font-sans font-medium text-white pr-10 hover:text-hover-nav rounded inline-flex items-center">
          <span>Competitions</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className="fixed lg:absolute hidden font-medium text-white pt-1 group-hover:block text-left w-72">
          <li className="">
            <a
              className=" bg-black hover:bg-hover-nav hover:text-black py-2 px-4 block"
              href="#"
            >
              Diponegoro UI/UX Competition
            </a>
          </li>
          <li className="">
            <a
              className=" bg-black hover:bg-hover-nav hover:text-black py-2 px-4 block"
              href="#"
            >
              Diponegoro Logic Competition
            </a>
          </li>
        </ul>
      </div>
      {/* Dropdown */}

      <NavItem>Seminar</NavItem>
      <NavItem
        style={classnames(
          "underline font-bold",
          hiddenNormalLogin ? "hidden" : ""
        )}
      >
        LOGIN
      </NavItem>
    </ul>
  );
}