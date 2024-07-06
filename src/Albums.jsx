import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Albums = () => {
  const navigate = useNavigate();

  const [albums, setalbums] = useState([]);
  function foto(param) {
    navigate(`/foto?userId=${param}`);
  }
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/albums",
      method: "GET",
    }).then((res) => {
      setalbums(res.data);
    });
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((Item, index) => (
            <tr>
              <td>{Item.userId}</td>
              <td>{Item.id}</td>
              <td>{Item.title}</td>
              <td>
                <button
                  onClick={() => foto(Item.id)}
                  className="btn btn-primary"
                >
                  photos
                </button>
              </td>
              <td>
                <Link to={"/"}>
                  <button className="btn btn-danger">back</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Albums;
