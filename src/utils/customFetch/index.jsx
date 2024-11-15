import { useState, useEffect } from "react";
import axios from "axios";

function CustomFetch(url, axiosMethod, payLoad) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataResponse, setDataResponse] = useState({});
  const urlAvail = url;

  console.log(axiosMethod);
  console.log(url);

  useEffect(() => {
    setLoading(true);
    if (axiosMethod === "GET") {
      const fetchAPI = async () => {
        try {
          const res = await axios.get(urlAvail);

          console.log(res, "res");

          if (res) {
            setDataResponse(res);
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage(error);
          setLoading(false);
        }
      };
      fetchAPI();
      return;
    } else if (axiosMethod === "POST") {
      const fetchAPI = async () => {
        try {
          const res = await axios.post(urlAvail, {
            headers: {
              "content-type": "text/json",
            },
            body: JSON.stringify(payLoad),
            method: "POST",
          });

          if (res) {
            setDataResponse(res);
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage(error);
          setLoading(false);
        }
      };
      fetchAPI();
    } else if (axiosMethod === "DELETE") {
      const fetchAPI = async () => {
        try {
          const res = await axios.delete(urlAvail, {
            headers: {
              "content-type": "text/json",
            },
            body: JSON.stringify(payLoad),
            method: "DELETE",
          });

          if (res) {
            setDataResponse(res);
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage(error);
          setLoading(false);
        }
      };
      fetchAPI();
    } else if (axiosMethod === "PATCH") {
      const fetchAPI = async () => {
        try {
          const res = await axios.patch(urlAvail, {
            headers: {
              "content-type": "text/json",
            },
            body: JSON.stringify(payLoad),
            method: "PATCH",
          });

          if (res) {
            setDataResponse(res);
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage(error);
          setLoading(false);
        }
      };
      fetchAPI();
    }
  }, [axiosMethod, urlAvail]);

  return {
    loading,
    errorMessage,
    dataResponse,
  };
}

export default CustomFetch;
