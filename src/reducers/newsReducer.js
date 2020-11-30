import axios from "../data/axios";
import CATEGORY from "../data/category";
import API_KEY from "../data/keys";
import constants from "../utils/constants";

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.SET_NEWS:
      return (state = (async () => {
        const _ = await axios.get(`${action?.value}${API_KEY}`);
        return _.data;
      })());
    default:
      return (state = (async () => {
        const _ = await axios.get(`${CATEGORY[0]}${API_KEY}`);
        return _.data;
      })());
  }
};
export default newsReducer;
