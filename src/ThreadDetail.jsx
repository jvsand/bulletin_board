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
  const [commentError, setCommentError] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
    setCommentError("");
  };

  const threadDetailUrl = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts?offset=0`;
  const postCommentUrl = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`;

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const validateComment = (comment) => {
      return comment.trim() !== "";
    };
    if(!validateComment(comment)){
      console.error("投稿内容がありません");
      setCommentError("投稿内容がありません");
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
        <h3 className="threadtitle">title: {title}</h3>
        <div className="container2">
      <div className="row-container">
        {/* コメント一覧の表示 */}
        {detailData.posts && detailData.posts.length > 0 && (
            <table className="commentlist">
              <tbody>
                {detailData.posts.map((post) => (
                  <tr key={post.id}>
                    <td>{">"} {title}<br />{post.post}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        )}
      </div>
      <div className="comment-container">
          <input
            id="newComment"
            value={comment}
            type="text"
            size="50"
            placeholder="内容を記載してください"
            onChange={handleChange}
            />

          <div className="button-container">
            <button className="button-done ">投稿</button>
            <button className="button-return" onClick={MovePage("/")}>
              戻る
            </button>
          </div>
      </div>
      </div>
        {/* postComplete が true / 成功メッセージを表示 */}
        {postComplete && <p>コメントを投稿しました</p>}

        {/* コメントが空の場合にエラーメッセージを表示 */}
        {commentError && <p>{commentError}</p>}
    </form>
  );
};

export default ThreadDetail;
