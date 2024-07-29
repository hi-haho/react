import React, { useState } from "react";
import "./App.css";
import Subject from "./mydir/subject";
import Haha from "./mydir/func";
//const App=()=>{}
function App() {
  const [subject, setSubject] = useState({
    title: "웹문서",
    subtitle: "리엑트 만세",
  });

  const [friends] = useState([
    { bun: 1, irum: "관우", nai: 33 },
    { bun: 2, irum: "장비", nai: 28 },
  ]);

  const handelChangePage = () => {
    //friends 배열값 콘솔에 출력
    friends.forEach((friend) => {
      console.log(
        `${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}입니다`
      );
      setSubject((prevSubject) => ({
        //이전 상태인 preSubject(subject)을 받아 변환
        ...prevSubject, //>> 전개 연산자 :객체 혹은 배열들을 펼칠 수 있게
        //title: "버튼에 의해 제목 변경",
        subtitle: "바꼈지롱",
        tata: "메롱",
      }));
    });
  };

  return (
    <div className="App">
      <>
        이벤트 연습<br></br>
        <Subject
          title={subject.title}
          subtitle={subject.subtitle}
          ChangePage={handelChangePage}
        />
        {/* title,subtitle,ChangePage: App에서 Subject컴포넌트로 전달되는 props */}
        <br />
        <br />
        <Haha
          subtitle={subject.subtitle}
          friends={friends}
          ChangePage={handelChangePage}
        ></Haha>
      </>
    </div>
  );
}

export default App;
