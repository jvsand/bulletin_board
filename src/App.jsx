import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ViewThread } from "./ViewThread";
import { CreateThread } from "./CreateThread";
import { ThreadDetail } from "./ThreadDetail";

function App() {
  return (
    <Router>
      <h1 className="App-header">掲示板</h1>
      <Routes>
        <Route path="/" element={<ViewThread />} />
        <Route path="/thread/new" element={<CreateThread />} />
        {/* スレッド詳細ページのルート */}
        <Route path="/thread/:id" element={<ThreadDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
