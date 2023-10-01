import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 共通の処理を関数に切り出す
function GetThreadTitle(url) {
    const [threadsData, setThreadsData] = useState([]);
    useEffect(() => {
        // APIエンドポイントURL
        // APIリクエストを送信
        axios.get(url)
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
        <ul>
            {threadsData.map((thread,{index})=>
            <table key={index}>
                <tbody>
                  <tr>
                    <td>{thread.title}</td>
                  </tr>
                </tbody>
            </table>
            )}
        </ul>
    );
}

export default GetThreadTitle;


  
    
    