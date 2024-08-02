import "./css/custom.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Memberform from "./pages/Memberform";
import MemberUpdateform from "./pages/MemberUpdateform";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/members" element={<Member />}></Route>
        <Route path="/members/new" element={<Memberform />}></Route>
        <Route path="/members/:num/edit" element={<MemberUpdateform />}></Route>
      </Routes>
    </div>
  );
}

export default App;
