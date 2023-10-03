import React, { useState } from "react";
import "./App.css";
import MovePage from "./MovePage";
import axios from "axios";

export const CreateThread = () => {
  const [newTitle, setNewTitle] = useState("");
  const [postComplete, setPostComplete] = useState(false); // post完了のステート変数を追加
  const handleChange = (e) => setNewTitle(e.target.value);
  const baseUrl =
    "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";

  // デフォルトの送信動作を防ぐハンドラ
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(baseUrl, { title: newTitle })
      .then((response) => {
        // POST リクエストの結果を取得
        const data = response.data;
        console.log(data);
        setPostComplete(true);
      })
      .catch((error) => {
        console.error("APIリクヱストエラー", error);
      });
  };
  return (
    <div>
      <h3 className="">スレッドの新規作成</h3>
      <input
        id="newTitle"
        value={newTitle}
        type="text"
        size="50"
        placeholder="スレッド名を入力してください"
        onChange={handleChange}
      ></input>
      <div className="row-buttons">
        <button className="row-button" onClick={MovePage("/")}>
          戻る
        </button>
        <button className="row-button" onClick={handleSubmit}>
          作成
        </button>
      </div>
      {postComplete && <p>スレッドを作成しました</p>}
    </div>
  );
};

export default CreateThread;
