import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Memberform() {
  const navigate = useNavigate();
  //state가 서버로 넘어갈때는 json 방식일 것
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  //추가 버튼 클릭시
  const handleSave = () => {
    axios
      .post("/members", state)
      .then((res) => {
        //data : res에서 넘어온 값
        if (res.data.isSuccess) {
          alert("추가 성공");
          navigate("/members"); //추가 후 목록보기
          //이때는 Link를 사용하면 안된다. 콜백함수, 페이지 이동시에는 navigate를 사용해야한다.
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h2>회원 입력</h2>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="이름 입력"
      ></input>{" "}
      <br />
      <input
        onChange={handleChange}
        type="text"
        name="addr"
        placeholder="주소 입력"
      ></input>
      <br />
      <button onClick={handleSave}>추가</button>
    </>
  );
}
