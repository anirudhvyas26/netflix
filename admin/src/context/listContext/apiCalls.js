import {
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
// //Delete
// export const deleteMovie = async (id, dispatch) => {
//   dispatch(deleteMovieStart());
//   try {
//     await axios.delete("/movies/"+id, {
//       headers: {
//         authorization:
//           "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(deleteMovieSuccess(id));
//   } catch (err) {
//     dispatch(deleteMovieFailure());
//   }
// };
