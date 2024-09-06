import { AboutData } from "../../db/aboutData";

function AboutPage() {
  return (
    <div className="max-content py-[40px]">
      <div className="container">
        <div className="mt-[70px] px-[40px] flex flex-col gap-y-[60px]">
          {AboutData.map((data, i) => (
            <div key={i} className="flex even:flex-row-reverse">
              <div className="w-[55%]">
                <img
                  src={data.iconimg}
                  alt=""
                  className="w-full h-auto rounded-[12px] "
                />
              </div>

              <div className="p-4 my-auto h-full w-[45%] font-playfair">
                <h2 className="text-[40px] font-[800] text-[green] leading-[56px]">
                  {data.title}
                </h2>
                <h3>{data.subTitle}</h3>
                {data.btnText && (
                  <button className="mt-[20px] text-[16px] bg-[green] text-[white] padding-[8px] rounded-[6px] py-[8px] px-[16px]">
                    {data.btnText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
