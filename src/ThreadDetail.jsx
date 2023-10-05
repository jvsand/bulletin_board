import React, { useState, useEffect } from "react";
import MovePage from "./MovePage";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const ThreadDetail = () => {
  const location = useLocation();
  const { id, title } = location.state;
  const [comment, setComment] = useState("");
  const [detailData, setDetailData] = useState({
    postId: "",
    threadId: "",
    post: "",
  });
  const [postComplete, setPostComplete] = useState(false); //作成完了したかどうかのflg

  const handleChange = (e) => setComment(e.target.value);

  const threadDetailUrl = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts?offset=0`;
  const postCommentUrl = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`;

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const validateComment = (comment) => {
      return comment.trim() !== "";
    };
    if(!validateComment(comment)){
      console.error("コメントが空です");
      return;
    };

    axios
      .post(postCommentUrl, { post: comment })
      .then((response) => {
        const newComment = response.data;
        setPostComplete(true);
        console.log("投稿成功", newComment);
        // コメント後の表示
        axios
          .get(threadDetailUrl)
          .then((response) => {
            const data = response.data;
            setDetailData(data);
            console.log("POST更新後のログ: ", data);
          })
          .catch((error) => {
            console.error("APIリクエストエラー:", error);
          });
      })
      .catch((error) => {
        console.error("APIリクヱストエラー", error);
      });
  };

  useEffect(() => {
    axios
      .get(threadDetailUrl)
      .then((response) => {
        const data = response.data;
        setDetailData(data);
        console.log("GETのログ: ", data);
      })
      .catch((error) => {
        console.error("APIリクエストエラー:", error);
      });
  }, []);

  return (
    <form onSubmit={handleCommentSubmit}>
      <div>
        <h3>title: {title}</h3>
        <input
          id="newComment"
          value={comment}
          type="text"
          size="50"
          placeholder="内容を記載してください"
          onChange={handleChange}
        />

        {/* コメント一覧の表示 */}
        {detailData.posts && detailData.posts.length > 0 && (
          <table>
            <tbody>
              {detailData.posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.post}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div>
          <button className="row-button">投稿</button>
          <button className="row-button" onClick={MovePage("/")}>
            戻る
          </button>
        </div>

        {/* postComplete が true の場合に成功メッセージを表示 */}
        {postComplete && <p>コメントを投稿しました</p>}
      </div>
    </form>
  );
};

export default ThreadDetail;
