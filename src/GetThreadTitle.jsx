import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 共通の処理を関数に切り出す
function GetThreadTitle() {
  const apiUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=3'; 
  const [threadsData, setThreadsData] = useState([]);
  useEffect(() => {
      // APIエンドポイントURL
      // APIリクエストを送信
      axios.get(apiUrl)
        .then((response) => {
          // レスポンスからデータを取得
          const data = response.data;
          // データをスレッドの状態に設定
          setThreadsData(data);
          // データをコンソールに出力して確認
          console.log(data); // ここでコンソールに出力
        })
        .catch((error) => {
          console.error('APIリクエストエラー:', error);
        });
    }, []);
  return (
    <table >
      <tbody>
        {threadsData.map((thread,{id})=>
          <tr key={id}>
            <td>{thread.title}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default GetThreadTitle;
