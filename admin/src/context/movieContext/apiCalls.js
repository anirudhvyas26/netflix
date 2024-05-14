import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios"
export const getMovies = async (dispatch) =>{
getMoviesStart()
try{
  const res =axios.get("/movies",{headers:{authorization: "Bearer" +JSON.parse( localStorage.getItem("user")).accessToken,},});
dispatch(getMoviesSuccess(res.data));
}catch(err){
dispatch( getMoviesFailure());
}
} ;
//create
export  const CreateMovie = async (movie, dispatch) => {
  dispatch (createMovieStart());
  try{
const res = await axios.post("/movies" , movie, {
headers:{
  Authorization:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
},
});
dispatch(createMovieSuccess(res.data));
  }catch(err){
dispatch((createMovieFailure));
  }
}; 
//Delete
export const deleteMovie = async(id, dispatch) =>{
  dispatch(deleteMovieStart());
  try{await axios.delete("/movies/" + id,{
    headers:{
      authorization:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    },
  });
dispatch(deleteMovieSuccess(id));
  }catch(err){
dispatch(deleteMovieFailure());
  }
};