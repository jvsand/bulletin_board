// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function PostThreadTitle(){
//     // post先url
//     const baseUrl="https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
    
//     // スレッドのタイトルを設定
//     const threadTitle = "string"; // タイトルをここで指定
//     const [post,setPost]=useState([]);


    
//     useEffect(()=>{
//         axios.post(baseUrl,{
//             title: threadTitle,
//         })
//         .then((response)=>setPost(response.data))
//         .catch((error) => {
//             console.error('APIリクエストエラー:', error);
//         });
//     })
//     return(<></>);
// }
// export default PostThreadTitle;
