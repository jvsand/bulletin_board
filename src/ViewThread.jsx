import './App.css';
import MovePage from './MovePage';
import GetThreadTitle from './GetThreadTitle';

export const ViewThread=()=> {
    const apiUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=3'; 
    
    return (
      <div>
        <h3>新着スレッド</h3>
        <button onClick={MovePage('/create-thread')}>新しいスレッドを作成</button>
        {GetThreadTitle(apiUrl)}
      </div>
    );
  }
  export default ViewThread;
