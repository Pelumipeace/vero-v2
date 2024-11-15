import { policyData } from "../../db/policyData";

function PrivacyPolicy() {
  return (
    <div>
      <div className="w-full py-[60px]  bg-[#E6E6FF99]/25">
        <h1 className="text-[36px] text-center leading-[50px] text-[#e36630] font-bold ">
          Privacy Policy
        </h1>
      </div>

      <div className="max-content">
        <div className="containr">
          <div className="flex gap-[40px] py-[40px]">
            <div className="w-[35%]">
              <div className="cusor pointer">
                <p className="text-[#2a3342] text-[20px] leading-[30px] font-[600] mt-[40px] tracking-normal">
                  In this section
                </p>
                <div className="mt-[15px]">
                  {policyData.map((item, index) => (
                    <p
                      key={index + 1}
                      className="text-[16px] leading-[150%] text-[#556987] py-1 tracking-normal mb-2"
                    >
                      {item?.titleName}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[65%]">
              <div className="mt-[40px] flex items-center gap-[8px]">
                <p className="text-[#556987] text-[14px] leading-[30px] font-[600] tracking-normal">
                  This Privacy Policy Agreement (hereinafter referred to as the
                  Agreement) is between Escape Technologies Limited (hereinafter
                  referred to as we, us, or our) and the user (hereinafter
                  referred to as you or your) of Escape mobile
                  Application(hereinafter referred to as the App). This
                  Agreement governs the collection, use, storage, sharing, and
                  protection of your personal information when you access and
                  use the App. By installing, accessing, or using the App, you
                  acknowledge that you have read, understood, and agreed to the
                  terms of this Privacy Policy.
                </p>
              </div>

              <div className="mt-[30px]">
                {policyData.map((item, index) => (
                  <div key={item.titleName}>
                    <h1 className="font-[700] text-[24px] leading-[33px] text-[#2a3342]">
                      {index + 1}.{item.titleName}
                    </h1>
                    <ul className="list-[disc] px-[35px]">
                      {item?.content?.map((list, i) => (
                        <li
                          key={i}
                          className=" list-[disc] marker:text-[red] text-[#2a3342] text-[18px]  leading-[28px] font-[400] mt-[15px] tracking-normal"
                        >
                          {list?.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
