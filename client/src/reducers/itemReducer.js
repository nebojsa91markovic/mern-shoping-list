import { v4 as uuidv4 } from "uuid";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS:
      return { ...state, items: action.payload, loading: false };
    case ADD_ITEM:
      return { ...state, items: [payload, ...state.items] };
    case DELETE_ITEM:
      console.log("ovde0", state);
      console.log("ovde", payload, {
        ...state,
        items: state.items.filter((item) => item._id !== payload.id),
      });
      return {
        ...state,
        items: state.items.filter((item) => item._id !== payload.id),
      };
    case ITEMS_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
