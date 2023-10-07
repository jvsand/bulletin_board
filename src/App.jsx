import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import "./App.css";
import { ViewThread } from "./ViewThread";
import { CreateThread } from "./CreateThread";
import { ThreadDetail } from "./ThreadDetail";

function App() {
  return (
    <Router>
      <h1 className="App-header">掲示板
      <Link className="App-header-link" to="/thread/new">新しいスレッドを作成</Link>
      </h1>
      <Routes>
        <Route path="/" element={<ViewThread />} />
        <Route path="/thread/new" element={<CreateThread />} />
        <Route path="/thread/:id/posts" element={<ThreadDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
