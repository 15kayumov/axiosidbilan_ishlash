import React, { useEffect, useState } from "react";
import axios from "axios";
const photos = () => {
  const [arr, setarr] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/photos",
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
          </tr>
        </thead>
        <tbody>
          {arr.map((Item, index) => (
            <tr>
              <td>{Item.albumId}</td>
              <td>{Item.id}</td>
              <td>{Item.title}</td>
              <td>{Item.url}</td>
              <td>{Item.thumbnailUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default photos;
