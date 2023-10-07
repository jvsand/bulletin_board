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
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="App-subTitle">スレッドの新規作成</h3>
        <input
          id="newTitle"
          value={newTitle}
          type="text"
          size="50"
          placeholder="スレッド名を入力してください"
          onChange={handleChange}
        />
      </div>
      <p className="button-container">
        <button className="button-done" type="submit">
          作成
        </button>
        <button className="button-return" onClick={MovePage("/")}>
          戻る
        </button>
      </p>
      <p>
        {/* post完了メッセージを表示 */}
        {postComplete && <p>スレッドを作成しました</p>}
      </p>
    </form>
  );
};

export default CreateThread;
