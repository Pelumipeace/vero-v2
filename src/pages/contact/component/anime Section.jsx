import { imageData, textData } from "../../../db/slideData";
import { useState } from "react";
function AnimeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedImage = imageData[currentIndex];

  const handleImageChange = () => {
    setCurrentIndex((prev) => (prev + 1) % imageData.lenght);
  };
  return (
    <div className="w-full">
      <button onClick={() => handleImageChange()}>Click Here</button>
      <div className="relative">
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
                      ? "-translate-y-[30px] transition duration-500 ease-linear bg-[red]"
                      : "translate-y-[500px] transition duration-500 ease-linear"
                  }`}
                >
                  <p className="font-[700] text-[37px] leading-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[16px] font-[400] leading-[21px] mt-[15px]">
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
export default AnimeSection;
