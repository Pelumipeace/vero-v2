import { useState } from "react";
import { faqData } from "../db/faqData";
import { FaChevronDown } from "react-icons/fa";

function Faq() {
  const [activeIndex, setACtiveIndex] = useState(0);

  const openAccordion = (index) => {
    setACtiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="pb-[160px]">
      <div className="max-content">
        <div className="container">
          <div className="flex justify-center">
            <p className="w-[700px] sixm:w-full font-playfair text-center font-[700] text-[52px] xlsm:text-[32px] xlsm:leading-[32px] leading-[56px] text-[#222222]">
              Check out our frequently asked questions
            </p>
          </div>
          <div className="mt-[45px] flex justify-center">
            <div className="w-[900px] md:w-full flex flex-col gap-[12px]">
              {faqData?.map((item, i) => (
                <div
                  key={i}
                  className={` rounded-[12px] ${
                    activeIndex === i &&
                    "bg-gradient-to-t from-[#6161FF] to-[#BE45E9] p-[1px]"
                  }`}
                >
                  <div
                    className={`bg-[white] border-[1px] px-[20px] rounded-[12px] shadow-md border-[#e3dfdf]  ${
                      activeIndex === i
                        ? "ease-in duration-500 pb-[30px]"
                        : "ease-out duration-500"
                    }`}
                  >
                    <div
                      onClick={() => openAccordion(i)}
                      className="flex items-center justify-between gap-[10px] cursor-pointer py-[20px]"
                    >
                      <p className="font-[700]  text-[18px] leading0[27px] text-[#101828]">
                        {item?.que}
                      </p>
                      <div className="transform transition-transform">
                        <FaChevronDown
                          className={`${
                            activeIndex === i
                              ? "rotate-180 ease-in-out duration-500"
                              : "rotate-0 ease-in-out duration-500"
                          }`}
                        />
                      </div>
                    </div>

                    {activeIndex === i && (
                      <div className="transform transition-transform pt-[10px]">
                        <p className="font-[400] text0[16px] leading-[24px] text-[#2e2e2e]">
                          {item?.ans}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
