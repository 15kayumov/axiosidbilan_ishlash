import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Coment = () => {
  const [searchParams] = useSearchParams();
  const [coment, setcoment] = useState([]);
  useEffect(() => {
    const postId = searchParams.get("postId");
    axios({
      url: "https://jsonplaceholder.typicode.com/comments?id=" + postId,
      method: "GET",
    }).then((res) => {
      setcoment(res.data);
    });
  }, []);
  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {coment.map((Item, index) => (
          <tr key={index}>
            <td>{Item.postId}</td>
            <td>{Item.id}</td>
            <td>{Item.name}</td>
            <td>{Item.email}</td>
            <td>{Item.body}</td>
            <td>
              <Link to={"/"}>
                <button className="btn btn-danger">back</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Coment;
