import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios"
export const getMovies = async (dispatch) =>{
getMoviesStart()
try{
  const res =axios.get("/movies",{headers:{authorization: "Bearer" +JSON.parse( localStorage.getItem("user")).accessToken,},});
dispatch(getMoviesSuccess(res.dataF))
}catch(err){
dispatch( getMoviesFailure());
}
} ;

