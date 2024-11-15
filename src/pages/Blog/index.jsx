import { BlogData } from "../../db/blogData";

function BlogPage() {
  return (
    <div className="bg-[#FAFEFF] py-[40px]">
      <div className="max-content">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-[658px]">
              <p className="font-playfair text-[48px] font-[700] leading-[60px]">
                Insight for Pentra Excellence
              </p>
              <div className="flex flex-col">
                <p className="font-[400px] text-center text-[18px] leading-24px] mt-[16px]">
                  Subscribe and stay informed with our expert articles, guides
                  and industry trends to elevate your business.
                </p>
                <div className="mt-[15px]">
                  <div className="flex gap-[5px]">
                    <input
                      type="text"
                      className="h-[45px] w-full border-[1px] border-[gray] outline-none rounded-[8px] p-[15px]"
                    />
                    <button className=" bg-[green]  py-2 px-4 text-[18px] text-[white] rounded-[8px] ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[60px] pb-[100px]">
            <p className="font-[400] text-[32px] leading-[30px] mb-[32px]">
              Recent Articles
            </p>
            <div className="flex gap-[40px] mdxl:flex-col mdxl:w-full ">
              <div>
                {BlogData.slice(0, 1).map((data, i) => (
                  <div
                    key={i}
                    className="w-[588px] mdxl:w-full lg:w-[400px] relative h-[558px] rounded-[8px] shadow-lg overflow-hidden"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="h-full w-full object-cover "
                    />
                    <div className="p-[24px] absolute bottom-0 w-[600px] text-[white] bg-[#1e471e]/70 mdxl:w-full">
                      <p className=" font-bold">{data.title}</p>
                      <p>{data.subtitle}</p>
                      <p>{data.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex flex-col gap-[24px]">
                  {BlogData.slice(1, 4).map((data, i) => (
                    <div key={i} className="flex">
                      <img
                        src={data.img}
                        alt=""
                        className="h-[170px] w-[282px] rounded-[8px]"
                      />
                      <div className="py-[20px] px-[10px] w-[282px] rounded-[4px] gap-24px]">
                        <p className="text-[#62b662] font-bold">{data.title}</p>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <p className="font-[400] text-[32px] leading-[30px] mb-[32px]">
                All Articles
              </p>
              <div className="grid grid-cols-3 gap-x-[20px] gap-y-[40px]  mdxl:grid-cols-2 lg:grid-cols-2 md:flex md:flex-wrap">
                {BlogData.map((data, i) => (
                  <div
                    key={i}
                    className="w-[400px] rounded-[8px] shadow-lg overflow-hidden"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="h-[250px] w-full hover:scale-110"
                    />
                    <div className="py-[20px] px-[10px]">
                      <p className="text-[#62b662] font-bold">{data.title}</p>
                      <p>{data.subtitle}</p>
                      <p>{data.text}</p>
                    </div>
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
export default BlogPage;
