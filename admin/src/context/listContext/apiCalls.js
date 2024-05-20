import {
  deleteListsFailure,
  deleteListsStart,
 deleteListsSuccess,
 getListStart,
  getListsFailure,
  getListsSuccess,
 
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
//create
// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMovieStart());
//   try {
//     const res = await axios.post("/movies", movie, {
//       headers: {
//         Authorization:
//           "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(createMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(createMovieFailure());
//   }
// };
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
