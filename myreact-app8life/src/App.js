import Clock1 from "./exem/Clock";
import Clock2 from "./exem/Clock2";
import Clock3 from "./exem/Clock3";
import MyComponent from "./exem/Myconponent";
import MyComponent2 from "./exem/MyComponent2";
import MyForm from "./exem/MyForm";
//컴포넌트는 생성>업데이트>제거의 생명주기를 갖는다.
//
function App() {
  return (
    <div className="App">
      <>
        <h2>리액트 생명주기 연습용 : 디지털시계</h2>
        <Clock1></Clock1>
        <hr />
        <Clock2></Clock2>
        <hr />
        <Clock3></Clock3>
        <hr></hr>
        <MyComponent></MyComponent>
        <hr />
        <MyComponent2 />
        -----생명주기 끝----- <hr />
        <h2>Form 작업</h2>
        사용자와 웹 페이지 간의 상호작용
        <br />
        <MyForm></MyForm>
      </>
    </div>
  );
}

export default App;
