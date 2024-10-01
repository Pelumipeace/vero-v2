import { useEffect, useState } from "react";
import { imageData, textData } from "../../../db/slideData";

function SlideSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedImage = imageData[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full pb-[160px]">
      <div className=" relative md:hidden">
        <img src={animatedImage.img} alt="image" className="w-full h-[600px]" />
        <div className="absolute top-0 w-full h-full">
          <div className="grid grid-cols-4 gap-[20px] h-full">
            {textData.map((item, i) => (
              <div
                key={i}
                className={`h-full flex flex-col justify-end px-[10px] overflow-hidden ${
                  currentIndex === i ? "bg-[black]/70" : "bg-[black]/20"
                }`}
                onMouseOver={() => setCurrentIndex(i)}
              >
                <div
                  className={`text-[white] ${
                    currentIndex === i
                      ? "-translate-y-[30px] transition duration-500 ease-linear"
                      : "translate-y-[500px] transition duration-500 ease-linear"
                  }`}
                >
                  <p className="font-[700] text-[30px] leading-[30px]. ">
                    {item.title}
                  </p>
                  <p className="text-[21px] font-[400] leading-[20px] mt-[12px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile design */}
      <div className="hidden md:block">
        <div className="max-content">
          <div className="container">
            <div className="flex flex-col gap-[30px]">
              {textData.map((item, i) => (
                <div key={i}>
                  <img
                    src={item?.img}
                    alt="img"
                    className="w-full h-[350px] xlsm:h-[280px] rounded-[8px] object-cover"
                  />
                  <p className="mt-[16px] font-[600] text-[24px] leading-[32px]">
                    {item?.title}
                  </p>
                  <p className="mt-[10px] font-[400] text-[14px] leading-[18px]">
                    {item?.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideSection;
