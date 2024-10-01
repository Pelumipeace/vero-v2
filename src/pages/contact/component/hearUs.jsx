import { hearData } from "../../../db/hearData";
import { useState } from "react";
import prev from "../../../assets/prev arrow.svg";
import next from "../../../assets/next arrow.svg";
import quote from "../../../assets/quote.svg";

function HearUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedImage = hearData[currentIndex];

  const handleImageChangePrev = () => {
    setCurrentIndex((prev) => (prev - 1) % hearData.length);
  };

  const handleImageChange = () => {
    setCurrentIndex((prev) => (prev + 1) % hearData.length);
  };

  console.log(currentIndex, "current index");

  console.log(animatedImage?.iconImg, "IconImage");

  return (
    <div className="pb-[160px]">
      <div className="max-container">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-[740px] sixm:w-full text-center">
              <p className="font-[700] font-playfair text-[32px] leading-[38px]">
                Hear What Our Users Are Saying
              </p>
              <p className="mt-[16px] font-[400] text-[14px]  leading-[18px]">
                Veroco stands as your gateway to a traceable, compliant, and
                efficient export journey. With our unparalleled expertise,
                regulatory prowess, and commitment to efficiency, Pentrar
                empowers you to navigate complexities with ease, setting the
                stage for sustainable growth and success. Join hands with
                Pentrar today and unlock the full potential of your export
                endeavors.
              </p>
            </div>
          </div>
          <div className="mt-[60px]">
            <div className=" flex gap-[50px] sixm:flex-col sixm:gap-[20px]">
              <img
                src={animatedImage?.iconImg}
                alt="image"
                className="h-[350px] w-[500px] mdxl:w-[400px] sixm:w-full rounded-[12px] object-cover "
              />
              <div>
                <div className=" flex justify-end pr-[40px] md:hidden">
                  <img
                    src={quote}
                    alt="icon"
                    className="w-[60px] h-[60px] mdxl:w-[40px] mdxl:h-[40px] "
                  />
                </div>
                <p className=" mt-[30px] sixm:mt-0 text-[14px] leading-[18px]">
                  {animatedImage?.subtitle}
                </p>
                <div className="mt-[30px] sixm:mt-[15px] text-[14px]">
                  <p>{animatedImage?.position}</p>
                  <p className="font-[600]">
                    {animatedImage?.company}, {animatedImage?.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Current index identifier */}
            <div className="mt-[32px] sixm:mt-[16px] flex justify-center items-center gap-[8px]">
              {hearData?.map((item, i) => (
                <div
                  key={i}
                  className={`w-[10px] h-[10px] rounded-[100%] ${
                    currentIndex === i
                      ? "bg-[black]"
                      : "bg-[white] border-[1px] border-[black]"
                  }`}
                ></div>
              ))}
            </div>

            {/* Toggle button */}
            <div className="mt-[10px] flex justify-center items-center gap-[30px]">
              <button
                disabled={currentIndex === 0}
                onClick={() => handleImageChangePrev()}
                className="bg-[#fdfdfd] py-[12px] px-[24px] rounded-[8px] shadow-md"
              >
                <img src={prev} alt="" />
              </button>
              <button
                // onClick={() => handleNextClick()}
                onClick={() => handleImageChange()}
                className="bg-[#fdfdfd] py-[12px] px-[24px] rounded-[8px] shadow-md"
              >
                <img src={next} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HearUs;
