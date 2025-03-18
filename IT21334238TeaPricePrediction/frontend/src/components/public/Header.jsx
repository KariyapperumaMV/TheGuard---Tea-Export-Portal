import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Navbar className="bg-gray-200 shadow-lg">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex"
      >
        <div className="flex justify-center items-center gap-5">
          <img src={logo} className="h-12 lg:h-14" alt="Company Logo" />
          <h1 className="text-green-700 font-semibold text-3xl font-serif mt-2">
            TEA HOUSE
          </h1>
        </div>
      </Link>
    </Navbar>
  );
}
