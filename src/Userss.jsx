import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Userss = () => {
  const navigate = useNavigate();
  function userinfo(param) {
    navigate(`post?id=${param}`);
    console.log(param);
  }
  const [users, setuser] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    }).then((res) => {
      setuser(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      onClick={() => userinfo(item.id)}
                      className="btn btn-dark"
                    >
                      POST
                    </button>
                  </td>
                  <td>
                    <Link to={"/albums"}>
                      <button className="btn btn-success">ALBUMS</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={"/todos"}>
                    <button className="btn btn-info">TODOS</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userss;
