import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateform() {
  ///members/:num/edit > 해당 num값 읽기
  const { num } = useParams();

  //수정할 정보 state로 관리
  const navigate = useNavigate();
  const [state, setState] = useState({
    num: 0,
    name: "",
    addr: "",
  });

  useEffect(() => {
    //ajax 요청 (GET 방식) 설정
    axios
      .get("/members/" + num)
      .then((res) => {
        //서버로부터 응답된 데이터를 이용해서 state를 수정
        //res.data는 {num: 1, name:'공기밥',addr:'강남구'}
        setState(res.data); //서버에서 json으로 들어온 값
      })
      .catch((error) => {
        console.log(error);
      });
  }, [num]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //수정 버튼 클릭시
  const handleSave = () => {
    axios
      .put("/members/" + num, state)
      .then((res) => {
        //data : res에서 넘어온 값
        if (res.data.isSuccess) {
          navigate("/members"); //추가 후 목록보기
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>회원 정보 수정</h2>
      <div>
        <label>이름 : </label>
        <input onChange={handleChange} type="text" name="name"></input>
      </div>
      <div>
        <label>주소 : </label>
        <input
          onChange={handleChange}
          type="text"
          name="addr"
          placeholder="주소 입력"
        ></input>
      </div>
      <br />
      <button onClick={handleSave}>수정</button>
    </>
  );
}
