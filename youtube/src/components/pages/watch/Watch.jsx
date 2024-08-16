import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";

export default function Watch() {
  const location = useLocation();
  console.log(location);

  // Extract movie data from the location state, fallback to a default trailer if not available
  const movie = location.state?.movie;
  const trailer = movie?.trailer || "https://player.vimeo.com/video/845451645?h=28abcb82d4&autoplay=1&loop=1&title=0&byline=0";

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe
        className="video"
        title="Movie Trailer"
        autoPlay
        controls
        src={trailer}
      ></iframe>
    </div>
  );
}
