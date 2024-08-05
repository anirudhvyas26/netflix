import React, { useEffect, useState } from "react"; // Import React
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Listitem({ index, item }) {
  const [movie, setMovie] = useState({});
  const [isHovered, setIsHovered] = useState(false); // Add state for hover

  useEffect(() => {
    const getMovie = async () => {
      const { accessToken } = JSON.parse(localStorage.getItem("user"));
      try {
        // With the proxy configured, you can simply make requests to paths starting with "/api"
        const res = await axios.get(
          `${env.VITE_BACKEND_URL}/api/movies/find/` + item,
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {<img src={movie.img} alt="" />}

        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
