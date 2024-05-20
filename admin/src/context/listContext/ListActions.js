export const getListStart = () => ({
  type: "GET_LISTS_START",
});
export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});
export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

// export const createListsStart = () => ({
//   type: "CREATE_MOVIE_START",
// });

// export const createListsSuccess = (movie) => ({
//   type: "CREATE_MOVIE_SUCCESS",
//   payload: movie,
// });

// export const createListsFailure = () => ({
//   type: "CREATE_MOVIE_FAILURE",
// });
// export const updateListsStart = () => ({
//   type: "UPDATE_MOVIE_START",
// });

// export const updateListsSuccess = (movie) => ({
//   type: "UPDATE_MOVIE_SUCCESS",
//   payload: movie,
// });

// export const updateListsFailure = () => ({
//   type: "UPDATE_MOVIE_FAILURE",
// });

// export const deleteListsStart = () => ({
//   type: "DELETE_MOVIE_START",
// });

// export const deleteListsSuccess = (id) => ({
//   type: "DELETE_MOVIE_SUCCESS",
//   payload: id,
// });

// export const deleteListsFailure = () => ({
//   type: "DELETE_MOVIE_FAILURE",
// });