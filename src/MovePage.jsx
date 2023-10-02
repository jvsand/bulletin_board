import { useNavigate } from 'react-router-dom';

// 共通の処理を関数に切り出す
function MovePage(url) {
    const navigate = useNavigate();// useNavigate を利用
    const MovePage = () => {
    navigate(url);// 新しいスレッド作成ページに遷移
    };
    return MovePage;
}

export default MovePage;
