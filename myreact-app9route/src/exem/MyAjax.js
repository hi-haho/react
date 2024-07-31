import React, { useState, useEffect } from "react";
//useEffect : 외부

const MyAjax = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  // fetch를 이용해 jsp자료(Apache server) 읽기
  // Ajax 처리 성공하면 isLoaded, item를 갱신 (실패하면 error를 갱신)
  // cors
  // package.json에 등록 > "proxy":"http://localhost:8080"
  useEffect(() => {
    fetch("/web_react/abc.jsp", { method: "GET" }) //("요청주소(json)",)
      .then((res) => {
        if (!res.ok) {
          throw new Error("network response was not ok");
        }
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result.items); //items는 json의 items이다.
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); //의존성 배열을 비워두었다. 즉 한번만 실행된다.

  //error가 나면 에러 메세지를 isLoaded가 false이면 로딩 메세지를
  // 그 외에는 itemdmf 출력(렌더링)한다.
  if (error) {
    return <div>에러 : {error.massage}</div>;
  } else if (!isLoaded) {
    return <div> .. 자료 수신중 .. </div>;
  } else {
    return (
      <ul>
        {item.map((item) => (
          <li>
            {item.code} {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
};

export default MyAjax;
