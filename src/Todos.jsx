import React, { useEffect, useState } from "react";
import axios from "axios";
const Todos = () => {
  const [arr, setarr] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
    }).then((res) => {
      setarr(res.data);
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
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((Item, index) => (
            <tr key={index}>
              <td>{Item.userId}</td>
              <td>{Item.id}</td>
              <td>{Item.title}</td>
              <td>
                <input  type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
