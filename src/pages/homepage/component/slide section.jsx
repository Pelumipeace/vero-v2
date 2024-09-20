import { useEffect, useState } from "react";
import { imageData, textData } from "../../../db/slideData";

function SlideSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedImage = imageData[currentIndex];

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % imageData.length);
  //     }, 10000);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  const handleImageChange = () => {
    // setCurrentIndex(currentIndex + 1);
    setCurrentIndex((prev) => (prev + 1) % imageData.length);
  };

  return (
    <div className="w-full ">
      <button onClick={() => handleImageChange()}>Click Here</button>
      <div className=" relative">
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
                  <p className="font-[700] text-[37px] leading-[32px]. ">
                    {item.title}
                  </p>
                  <p className="text-[27px] font-[500] leading-[25px] mt-[15px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideSection;
