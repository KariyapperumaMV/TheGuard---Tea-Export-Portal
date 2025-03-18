import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../assets/public/logo.png";

export default function Footers() {
  return (
    <Footer container className=" shadow-lg rounded-none bg-gray-200">
      <div className="w-full ml-auto">
        <div className="grid w-full md:justify-between sm:flex md:grid-cols-1">
          {/* Logo */}
          <div className="mt-5">
            <img
              src={logo}
              className="ml-auto mr-auto h-40 w-auto"
              alt="Logo"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 text-black">
            <div className="hidden lg:flex flex-col">
              <Footer.Title title="xxxxx xxxxx" className="text-black" />
              {/* Links For xxxxx xxxxx */}
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">xxxxx xxxxx</Footer.Link>
                <Footer.Link href="#">xxxxx xxxxx</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="xxxxx xxxxx" className="text-black" />
              {/* Links For xxxxx xxxxx */}
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">xxxxx xxxxx</Footer.Link>
                <Footer.Link href="#">xxxxx xxxxx</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-black" />
              {/* Links For Support */}
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <Footer.Divider />
        <div className="flex w-full justify-between">
          {/* Copyright notice */}
          <div className="hidden lg:flex">
            <Footer.Copyright
              className="text-black"
              by="Copyright SLIIT Students. All Rights Reserved."
              year={new Date().getFullYear()}
            />
          </div>
          {/* Icons aligned to the right */}
          <div className="flex space-x-6 ">
            <Footer.Icon href="#" icon={BsFacebook} className="text-black" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-black" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-black" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-black" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
