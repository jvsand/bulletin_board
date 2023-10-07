import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// 共通の処理を関数に切り出す
function GetThreadTitle() {
  const [threadsData, setThreadsData] = useState([]);
  const apiUrl =
    "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0";

  useEffect(() => {
    // APIエンドポイントURL
    // APIリクエストを送信
    axios
      .get(apiUrl)
      .then((response) => {
        // レスポンスからデータを取得
        const data = response.data;
        // データをスレッドの状態に設定
        setThreadsData(data);
        // データをコンソールに出力して確認
        console.log(data); // ここでコンソールに出力
      })
      .catch((error) => {
        console.error("APIリクエストエラー:", error);
      });
  }, []);
  return (
    <table>
      <tbody>
        {threadsData.map((thread, { id }) => (
          <tr key={id}>
            <td>
              <Link
                to={`/thread/${thread.id}/posts?offset=0`}
                state={{ id: thread.id, title: thread.title }}
              >
                {thread.title}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GetThreadTitle;
