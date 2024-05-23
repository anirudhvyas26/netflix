import {
  createListsFailure,
  createListStart,
  createListsSuccess,
  deleteListsFailure,
  deleteListsStart,
 deleteListsSuccess,
 getListStart,
  getListsFailure,
  getListsSuccess,
  createListsStart,
 
} from "./ListActions";
import axios from "axios";


export const getLists = async (dispatch) => {
  dispatch(getListStart());
  try {
    const res =  await axios.get("/lists", {
      headers: {
        authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

export const createList = async (list, dispatch) => {
  dispatch(createListsStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListsSuccess(res.data));
  } catch (err) {
    dispatch(createListsFailure());
  }
};
//Delete
export const deletelist = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
    await axios.delete("/lists/"+id, {
      headers: {
        authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (err) {
    dispatch(deleteListsFailure());
  }
};
