import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Member() {
  const [members, setMembers] = useState([]);

  const refresh = () => {
    //ajax 요청 (GET 방식) 설정
    axios
      .get("/members")
      .then((res) => {
        //서버로부터 응답된 데이터를 이용해서 state를 수정
        setMembers(res.data); //서버에서 json으로 들어온 값
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    refresh(); //Ajax 요청 처리 시작
  }, []);

  //삭제버튼 클릭시 이벤트 핸들러 함수
  const handleDelete = (num) => {
    //ajax 요청 (delete 방식) 설정
    axios
      .delete("/members/" + num)
      .then((res) => {
        //삭제후 목록보기
        refresh(); //서버에서 json으로 들어온 값
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //페이지 이동함수
  const navigate = useNavigate(); //페이지 이동 함수
  //Link : 단순하게 페이지 이동을 할 경우 사용
  //useNavigate : 특정 이벤트가 실행하면 동작하도록 하거나, 추가적인 로직이 필요한 경우 사용
  return (
    <>
      <Link to="/">메인페이지</Link>&emsp;
      <Link to="/members/new">회원추가</Link>&emsp;
      <h1>회원 목록</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {members.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td>{item.name}</td>
              <td>{item.addr}</td>
              <td>
                <button
                  onClick={() => {
                    navigate(`/members/${item.num}/edit`); //ajax 아님 /members/${item.num}/edit`
                  }}
                >
                  수정
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.num)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
