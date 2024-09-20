import { headerData } from "../db/headerData";
import logo from "../assets/logo.png";
import openIcon from "../assets/open.svg";
import closeIcon from "../assets/close.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };
  return (
    <div className="">
      <div className=" bg-[#0a3113]">
        <div className="max-content">
          <div className="container py-[16px]">
            <div className="flex  items-center justify-between">
              <div
                className="flex gap-[12px] items-center"
                onClick={() => handleNavigate("/")}
              >
                <img
                  src={logo}
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
                <p className="text-[white] font-[600] text-[32px] leading-[32px] tracking-normal">
                  Veroco
                </p>
              </div>

              <div className="flex gap-[24px] mdxl:hidden">
                {headerData?.map((item, i) => (
                  <p
                    onClick={() => navigate(item.url)}
                    key={i}
                    className="text-[white] cursor-pointer font-[400] text-[16px] leading-[16px] tracking-normal"
                  >
                    {item.title}
                  </p>
                ))}
              </div>

              <div className="flex items-center gap-[24px] mdxl:hidden">
                <button className="bg-[white] py-[12px] px-[24px] rounded-[8px] text-[#0a3113]">
                  Request a Demo
                </button>
                <button className="border-[white] border-[1px] py-[12px] px-[24px] rounded-[8px] text-[white]">
                  Login
                </button>
              </div>

              {/* Show Menu icon on mobile */}
              <div className="hidden mdxl:block">
                {open ? (
                  <img
                    onClick={toggleMenu}
                    src={closeIcon}
                    alt="menuIcon"
                    className="w-[25px] h-[30px]"
                  />
                ) : (
                  <img
                    onClick={toggleMenu}
                    src={openIcon}
                    alt="menuIcon"
                    className="w-[30px] h-[30px]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show navlinks on Mobile */}
      {open && (
        <div className="bg-[white] h-screen p-[20px]">
          <div className="flex flex-col gap-[24px] ">
            {headerData?.map((item, i) => (
              <p
                onClick={() => handleNavigate(item.url)}
                key={i}
                className="text-[#0a3113] cursor-pointer font-[400] text-[16px] leading-[16px] tracking-normal"
              >
                {item.title}
              </p>
            ))}
          </div>

          <div className="mt-[40px] flex items-center gap-[24px] sm:flex-col">
            <button className="bg-[#0a3113] py-[12px] px-[24px] rounded-[8px] text-[white] sm:w-full">
              Request a Demo
            </button>
            <button className="border-[grey] border-[1px] py-[12px] px-[24px] rounded-[8px] text-[#0a3113] sm:w-full">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
