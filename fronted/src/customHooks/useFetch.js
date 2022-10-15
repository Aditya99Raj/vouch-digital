import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [data]);
  const fetchData = () => {
    axios.get(url).then((res) => {
      const response = res.data;
      console.log(response);
      setData(response);
    });
  };
  return data;
};

export default useFetch;
