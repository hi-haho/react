import React from "react";
//Member 컴포넌트
const Member = ({ memberData }) => {
  //memberData >> props
  return (
    <tr>
      <td>{memberData.name}</td>
      <td>{memberData.tel}</td>
    </tr>
  );
};

//Main 컴포넌트 (해당 파일 안에서)
const Multidata = () => {
  const member = [
    { name: "짱구", tel: "1234-1234" },
    { name: "유리", tel: "1234-1111" },
    { name: "철수", tel: "1234-2222" },
  ];
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화</th>
        </tr>
      </thead>
      <tbody>
        {/* 배열 랜더링시 각 요소의 고유 key를 추가 */}
        {member.map((mem, index) => (
          <Member key={index} memberData={mem}></Member>
        ))}
      </tbody>
    </table>
  );
};

export default Multidata;
