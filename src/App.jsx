import React from "react";
import { Routes, Route } from "react-router-dom";
import Userss from "./Userss";
import Coment from "./Coment";
import Post from "./Post";
import Albums from "./Albums";
import Photo from "./Photo";
import Todos from "./Todos";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Userss />} />
        <Route path="/post" element={<Post />} />
        <Route path="/coment" element={<Coment />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/foto" element={<Photo />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<h1>404 NOTE FOUND PAGE</h1>} />
      </Routes>
    </div>
  );
};

export default App;
