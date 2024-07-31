import React from "react";
import Test from "./exem/test";
import HiAbout from "./exem/about";
import Count from "./exem/Count";
import Input1 from "./exem/input1";
import Input2 from "./exem/Input2";
import Multidata from "./exem/Multidata";
import MyAjax from "./exem/MyAjax";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인 화면</h2>
        <Test></Test>
        <hr />

        {/* 메뉴 작성 : 라우팅 연습 */}
        <nav>
          {/* Link는 a tag로 전환 : 요청명 개념으로 이해, 하지만 비동기로 처리*/}
          <Link to="/"> Test 화면 </Link> 🐏
          {/* <Route path="/">와 매핑이 되고 element={<Test></Test>}가 실제 수행한다. */}
          <Link to="/about"> About 보기</Link> 🐣
          <Link to="/count"> 친구 추가 </Link> 💀
          <Link to="/Input1"> 자료입력 </Link> 🤖
          <Link to="/Input2"> 자료입력 </Link> 🐨
          <Link to="/Multidata"> 자료보기 </Link> 🐪
          <Link to="/MyAjax"> 비동기 처리 </Link> 🙉
        </nav>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현이 가능*/}
          <Route path="/" element={<Test></Test>}></Route>
          <Route path="/about" element={<HiAbout />}></Route>
          <Route path="/count" element={<Count />}></Route>
          <Route path="/Input1" element={<Input1 />}></Route>
          <Route path="/Input2" element={<Input2 />}></Route>
          <Route path="/MyAjax" element={<MyAjax />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
