import axios from "axios";
import { useEffect, useState } from "react";

function Countries() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // State to store fetched data

  const url = "https://restcountries.com/v3.1/all";

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
    <div>
      {loading ? (
        "loading"
      ) : (
        <div className="max-content py-[150px]">
          <div className="container">
            <div className="grid grid-cols-4 gap-[20px]">
              {data?.map((item, i) => (
                <div key={i}>
                  <img
                    src={item?.flags.png}
                    alt="flg"
                    className="w-[200px] h-[150px]"
                  />
                  <p>
                    <span className="font-[600] mr-[5px]">Name:</span>
                    {item?.name?.common}
                  </p>
                  <p>
                    <span className="font-[600] mr-[5px]">Capital:</span>
                    {item?.capital}
                  </p>
                  <p>
                    <span className="font-[600] mr-[5px]">Area:</span>
                    {item?.area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Countries;
