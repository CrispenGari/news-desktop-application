import constants from "../utils/constants";

const setCategory = (value) => {
  return {
    type: constants.SET_CATEGORY,
    value: value,
  };
};
const setSelectedTab = (value) => {
  return {
    type: constants.SELECTED_CATEGORY,
    value: value,
  };
};
const setNews = (value) => {
  return {
    type: constants.SET_NEWS,
    value: value,
  };
};
const actions = {
  setCategory: setCategory,
  setSelectedTab: setSelectedTab,
  setNews: setNews,
};
export default actions;
