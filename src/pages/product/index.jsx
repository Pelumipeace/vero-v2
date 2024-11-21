import axios from "axios";
import { useEffect, useState } from "react";
import fryer from "../../assets/airfryer.jpg";
function Productpage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // State to store fetched data

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await axios.get(url);
      return data;
    };

    fetchData().then((res) => {
      setLoading(false);
      setData(res?.data);
    });
  }, [url]);

  console.log(data, "url data");

  return (
    <div className="max-content py-[150px]">
      <div className="container">
        <div>
          <div className="bg-[#0a3113] w-[1200px] h-[300px] mb-[30px]">
            <div className="flex py-[24px] px-[80px] items-center justify-between">
              <div className=" mt-[20px] w-[300px]">
                <p className="text-[white] text-[48px] leading-[50px] font-[800]">
                  VEROCO BLACK FRIDAY
                </p>
                <p className=" text-[20px] font-[400] mt-[10px] text-[#f49f02]">
                  01-30 Nov 2024
                </p>
              </div>
              <div>
                <p className="font-[700] text-[35px] text-center text-[#f49f02]">
                  Dior Jadore
                </p>
                <button className="text-[40px] font-[700] py-[10px] px-[28px] bg-[white] rounded-[8px]">
                  Up To 10% Off{" "}
                </button>
              </div>
              <div className="w-[300px] ">
                <img src={fryer} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          {data?.products.map((item, i) => (
            <div
              key={i}
              className="shadow-md hover:shadow-lg rounded-[12px] px-[10px] py-[12px]"
            >
              <img
                src={item?.images[0]}
                alt=""
                className="w-[200px] h-[150px]"
              />
              <p className="font-[600] text-[16px]">{item?.title}</p>
              <p>{item?.brand}</p>
              <p className="font-[600] text-[18px]">₦{item?.price}</p>
              <button className="w-full p-[10px] mt-[40px] rounded-[4px] bg-[green] text-[white] ">
                {" "}
                ADD TO CART{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productpage;
