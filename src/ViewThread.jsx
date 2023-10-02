import './App.css';
import MovePage from './MovePage';
import GetThreadTitle from './GetThreadTitle';

export const ViewThread=()=> {
    return (
      <div>
        <h3>新着スレッド</h3>
        <button onClick={MovePage('/thread/new')}>新しいスレッドを作成</button>
        {GetThreadTitle()}
      </div>
    );
  }
  export default ViewThread;
