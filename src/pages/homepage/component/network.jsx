import orange from "../../../assets/orange.png";

function Network() {
  return (
    <div className="relative my-[100px] ">
      <div className="max-content py-[32x]">
        <div className="container">
          <div className="flex gap-[40px] ">
            <div>
              <img src={orange} alt className="w-[750px] h-[655px]" />
            </div>
            <div className="h-[650] bg-[#0a3113] p-[32px]flex-col rounded-[12px] ">
              <div className="text-[white] w-[500px] py-[30px] p-7">
                <p className="font-playfair font-[700] text-[40px] leading-[40px]">
                  Find a great network to sell produce for export.
                </p>
                <p className="mt-[20px] font-[500] leading-[30px] pb-[100px]">
                  Find a great network to sell produce for export. In the realm
                  of agricultural exports, finding the right network can make
                  all the difference. Pentar offers farmers a gateway to a vast
                  ecosystem of buyers, importers, and distributors, facilitating
                  seamless connections and unlocking new opportunities for
                  growth.
                </p>
              </div>
              <div className=" border-t-[1px] border-[white] w-[450px]  ">
                <div className="flex gap-[24px] text-[white] p-[32px]">
                  <p className=" font-[500] text-[14px]leading-[20px]">
                    Access to invaluable market insights, trends, and demand
                    forecasts
                  </p>
                  <p>
                    Empowerment to make informed decisions about what and where
                    to sell
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Network;
