import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

// 共通の処理を関数に切り出す
function GetThreadTitle(url) {
    const [threadsData, setThreadsData] = useState([]);
    const navigate = useNavigate();

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
      }, [url]);
    return (
        <ul>
            {threadsData.map((thread,{index})=>
            <table key={index}>
                <tbody>
                  <tr>
                    <td>
                      <Link to={`/thread/${thread.id}/`}>{thread.title}</Link>
                      {/* オフセットしたものを表示させるようにしないといけないかも。。。？ */}
                      {/* <Link to={`/thread/${thread.id}/posts?offset=1`}>{thread.title}</Link> */}
                    </td>
                  </tr>
                </tbody>
            </table>
            )}
        </ul>
    );
}

export default GetThreadTitle;
