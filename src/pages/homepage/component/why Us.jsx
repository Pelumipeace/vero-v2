import { WhyUsData } from "../../../db/whyUs";

function WhyUs() {
  return (
    <div>
      <div className="max-content py-[100px] xlsm:py-[60px]">
        <div className="container">
          <h2 className="text-[60px] xlsm:text-[30px] text-center font-[600] font-playfair ">
            Why Choose Veroco?
          </h2>
          <div className="flex justify-center text-center mt-[15px]">
            <p className="w-[795px] xlsm:text-[14px]">
              Veroco stands as your gateway to a traceable, compliant, and
              efficient export journey. With our unparalleled expertise,
              regulatory prowess, and commitment to efficiency, Pentrar empowers
              you to navigate complexities with ease, setting the stage for
              sustainable growth and success. Join hands with Pentrar today and
              unlock the full potential of your export endeavors.
            </p>
          </div>
        </div>
        <div className="max-content py-[30px]">
          <div className="container">
            <div className="flex justify-center gap-[20px] p-[20px] items-center sixm:flex-wrap">
              {WhyUsData.map((item, i) => (
                <div key={i} className="flex flex-col items-center   ">
                  <img src={item.iconimg} alt="icon" className=" w-10 h-10 " />
                  <h2 className="text-[20px] font-[700] text-center py-[15px]">
                    {item.title}
                  </h2>
                  <p className="leading-[24px] font-[400] w-[370] text-[14px] text-center">
                    {item.subtitle}
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
export default WhyUs;
