import heroimg from "../../../assets/agric.jpg";

function HeroSection() {
  return (
    <div className="relative">
      <img src={heroimg} alt="" className=" h-[600px] xlsm:h-[500px] w-full" />
      <div className="absolute z-10 top-0 w-full h-full bg-[black] opacity-80"></div>
      <div className="absolute top-0 z-10 mt-[100px] ml-5 rounded-lg text-[white] w-full">
        <div className="max-content">
          <div className="container">
            <div className="">
              <h2 className="text-4xl">Welcome to Our Website</h2>
              <p className="text-2xl my-[16px]">
                Want to know our different agricultural poduce?
              </p>
              <button className=" bg-[green]  py-2 px-4 text-[18px] ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
