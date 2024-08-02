import "./App.css";
import MyName from "./mydir/myName";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Props와 state</h2> 컴포넌트에서 사용하는 데이터는 props와 state
        두개가 있다.
        <br></br>
        <b>props</b> : 부모 컴포넌트가 자식 컴포넌트에 주는 값 (단방향)<br></br>
        <b>state</b> : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능<br></br>
        <b>props나 state 값이 변경되면 컴포넌트는 리렌더링된다.</b>
        <hr></hr>
        <MyName />
        <br />
        <MyName name="한국인" />
      </div>
    </div>
  );
}

export default App;
