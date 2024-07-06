import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
const Post = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [post, setpost] = useState([]);
  function coment(param) {
    navigate(`/coment?postId=${param}`);
  }
  useEffect(() => {
    const userId = searchParams.get("id");
    axios({
      url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
      method: "GET",
    }).then((res) => {
      setpost(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>UserId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {post.map((Item, index) => (
            <tr key={index}>
              <td>{Item.userId}</td>
              <td>{Item.id}</td>
              <td>{Item.title}</td>
              <td>{Item.body}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => coment(Item.id)}
                >
                  coment
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

export default Post;
