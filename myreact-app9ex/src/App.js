import React from "react";
import Gugudan from "./mymy/Gugudan";
import JikAjax from "./mymy/JikAjax";
import Gugu1 from "./mymy/Gugu1";
import Navi from "./mymy/Navi";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>부트스트랩 + 구구단 + ajax로 db 불러오기</h1>
        <br />
        <nav>
          <Navi />
        </nav>
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/gugu" element={<Gugudan />}></Route>
          <Route path="/gugudan" element={<Gugu1 />}></Route>
          <Route path="/jik" element={<JikAjax />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
