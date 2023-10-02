import { useParams } from "react-router-dom";
import React from "react";
import MovePage from "./MovePage";

export function ThreadDetail() {
  // URLからパラメータを取得
  const { id } = useParams();

  return (
    <div>
      <h1>スレッド詳細</h1>
      <p>id：{id}</p>
      <button class="row-button" onClick={MovePage("/")}>
        戻る
      </button>
    </div>
  );
}

export default ThreadDetail;
