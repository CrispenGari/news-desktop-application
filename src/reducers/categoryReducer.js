import CATEGORY from "../data/category";
import constants from "../utils/constants";
const categoryReducer = (state = CATEGORY[0], action) => {
  switch (action.type) {
    case constants.SET_SELECTED_CATEGORY:
      return (state = action.value);
    default:
      return state;
  }
};

export default categoryReducer;
