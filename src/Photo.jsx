import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Photo = () => {
  const [arr, setarr] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const userId = searchParams.get("userId");

    axios({
      url: "https://jsonplaceholder.typicode.com/photos?albumId=" + userId,
      method: "GET",
    }).then((res) => {
      setarr(res.data);
    });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
            <th>_</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((Item, index) => (
            <tr>
              <td>{Item.albumId}</td>
              <td>{Item.id}</td>
              <td>{Item.title}</td>
              <td>
                <img src={Item.url} width={100} alt="" />
              </td>
              <td>
                <img src={Item.thumbnailUrl} width={100} alt="" />
              </td>
              <td></td>
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

export default Photo;
