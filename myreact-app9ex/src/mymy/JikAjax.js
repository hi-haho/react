import React, { useState, useEffect } from "react";

const JikAjax = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jik, setJik] = useState([]);

  useEffect(() => {
    fetch("/Jikwon/jikwonJson.jsp", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("network response was not ok");
        }
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setJik(result.jikwon);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>에러 : {error.massage}</div>;
  } else if (!isLoaded) {
    return <div> .. 자료 수신중 .. </div>;
  } else {
    return (
      <table border={1}>
        <tr>
          <th>사번</th>
          <th> 직원명 </th>
          <th> 부서명 </th>
          <th> 직급 </th>
        </tr>
        {jik.map((jik) => (
          <tr>
            <td>{jik.jikwon_no}</td>
            <td> {jik.jikwon_name} </td>
            <td> {jik.buser_name} </td>
            <td> {jik.jikwon_jik} </td>
          </tr>
        ))}
        <tr colspan={4}>총인원수 : {jik.length}</tr>
      </table>
    );
  }
};

export default JikAjax;
