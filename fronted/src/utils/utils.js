import axios from "axios";

export const fetchData = (url) => axios.get(url).then((res) => res.data);
