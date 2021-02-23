import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import { v4 as uuidv4 } from "uuid";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItem = (name) => (dispatch) => {
  axios
    .post("/api/items", { name })
    .then((res) => {
      dispatch({ type: ADD_ITEM, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) => {
    console.log("success", res);
    dispatch({
      type: DELETE_ITEM,
      payload: { id },
    });
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
    payload: {},
  };
};
