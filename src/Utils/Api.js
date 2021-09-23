import axios from "axios";
const API_KEY = "22658019-02cb55ad5d7bd8ac51d545955";
const BASE_URL = "https://pixabay.com/api/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  image_type: "photo",
  key: API_KEY,
  per_page: 12,
  safesearch: true,
};

export const fetchPictures = async (name, page) => {
  const response = await axios.get("", {
    params: {
      q: name,
      page,
    },
  });
  return response.data.hits;
};
