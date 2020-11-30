import constants from "../utils/constants";
import CATEGORY from "../data/category";
const selectedTabReducer = (state = CATEGORY[0], action) => {
  switch (action.type) {
    case constants.SELECTED_CATEGORY:
      return (state = action.value);
    default:
      return state;
  }
};

export default selectedTabReducer;
