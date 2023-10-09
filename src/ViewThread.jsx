import "./App.css";
import GetThreadList from "./GetThreadList";

export const ViewThread = () => {
  return (
    <div className="header-container">
      <h3 className="App-subTitle">新着スレッド</h3>
      <div>{<GetThreadList/>}</div>
    </div>
  );
};
export default ViewThread;
