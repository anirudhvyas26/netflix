import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      console.log(type, genre);
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MThhNzRhOGM5OTM3MGI1M2E5MmJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjg5OTUyMCwiZXhwIjoxNzE5NDkxNTIwfQ.0AC71ud49_yoBUNOnHTqpOZiueGkKsHu9E6iP-UGLT0",
            },
          }
        );
        setLists(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {JSON.stringify(lists)}
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
