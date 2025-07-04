// react icons
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 shadow-md rounded-xl w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
        <Link to="/">
          <img
            className="h-36 w-36"
            src="https://i.postimg.cc/J0pJ6NS5/ffb5bbf3-70ae-466f-8b59-d76cb5406695-removebg-preview.png"
            alt="logo"
          />
        </Link>
        <p className="text-[0.9rem] dark:text-[#abc2d3] text-center sm:text-start text-gray-600">
          This is book add and borrow platform. Its fully free and open source.
          Thats is sacrifies from me.
        </p>

        <Link
          to="https://www.facebook.com/imran9066588"
          target="_blank"
          className="py-3 px-6 rounded-full bg-[#3B9DF8] text-white"
        >
          Contact Us
        </Link>

        <div className="flex gap-[15px] text-black mt-4">
          <Link
            to="https://www.facebook.com/imran9066588"
            target="_blank"
            className="text-[1.3rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <CgFacebook />
          </Link>
          <Link
            to="https://developerimran-portfolio.netlify.app"
            target="_blank"
            className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <BsTwitter />
          </Link>
          <Link
            to="https://developerimran-portfolio.netlify.app"
            target="_blank"
            className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <BsInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/developerimran1122/"
            target="_blank"
            className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
        <p className="text-[0.9rem] text-gray-300">
          © 2025 All Rights Reserved
        </p>

        <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
      </div>

      <img
        src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
        alt="background/image"
        className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
      <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="background/image"
        className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
    </footer>
  );
};

export default Footer;
