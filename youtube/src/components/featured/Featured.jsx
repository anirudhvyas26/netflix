import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      const accessToken = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))["accessToken"]
        : null;
      try {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/api/movies/random?type=${type}`,
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        );
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />
      <div className="info">
        {/* <img src={content.imgTitle} alt=" " /> */}
        <h2 className="movie-title">{content.title}</h2>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
