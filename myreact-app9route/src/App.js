import React from "react";
import Test from "./exem/test";
import HiAbout from "./exem/about";
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
          {/* Link는 a tag로 전환 : 요청명 개념으로 이해*/}
          <Link to="/"> Test 화면 </Link>|
          {/* <Route path="/">와 매핑이 되고 element={<Test></Test>}가 실제 수행한다. */}
          <Link to="/about"> About 보기</Link>
        </nav>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현이 가능*/}
          <Route path="/" element={<Test></Test>}></Route>
          <Route path="/about" element={<HiAbout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
