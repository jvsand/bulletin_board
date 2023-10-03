
import React, { useEffect, useState } from "react";
import MovePage from "./MovePage";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const ThreadDetail=()=> {
  const location = useLocation();
  const { id, title } = location.state;

  const [detailData, setDetailData] = useState([]);
  const threadDetailUrl = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts?offset=0`;

  useEffect(() => {
    axios
      .get(threadDetailUrl)
      .then((response) => {
        const data = response.data;
        setDetailData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("APIリクエストエラー:", error);
      });
  }, []);

  return (
    <div>
      <h1>title: {title}</h1>
      <p>id:{id}</p>
      <h3 className="">スレッドへの投稿</h3>
       <input
         id="newTitle"
         // value={newTitle}
         type="text"
         size="50"
         placeholder="内容を記載してください"
         // onChange={handleChange}
       ></input>

      {/* ここがまだできていない */}
       {/* <table>
         <tbody>
           {detailData.map((post) => (
             <tr key={post.id}>
               <td>{post.content}</td>
             </tr>
           ))}
        </tbody>
       </table> */}

      <div>
        <button className="row-button">投稿</button>
        <button className="row-button" onClick={MovePage("/")}>
        戻る
        </button>
      </div>
    </div>
  );
  }

export default ThreadDetail;
