import { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    irum: "",
    age: "",
    menu: "파전",
  });

  const dataChange = (e) => {
    const name = e.target.name; // form 태그 내의 name
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dataSubmit = (e) => {
    //이벤트 핸들러 return안에 이벤트가 발생하는 경우 진행
    e.preventDefault(); // 고유 기능 해제
    const { nai } = formData; // formData 객체에서 nai를 추출해 nai를 치환

    if (!Number(nai) || isNaN(Number(nai))) {
      //나이 입력자료 검사
      alert("나이는 숫자로 입력하시오");
    } else {
      alert("처리 성공");
    }
  };

  return (
    <>
      <h3>
        결과 : {formData.name} , 넌 {formData.nai} 살! 선택한 음식은
        {formData.menu}
      </h3>
      <form onSubmit={dataSubmit}>
        이름 입력 :<input type="text" name="name" onInput={dataChange}></input>
        <br />
        나이 입력: <input type="text" name="nai" onInput={dataChange}></input>
        <br />
        야식 메뉴 :
        <select name="menu" value={formData.menu} onChange={dataChange}>
          <option value="치킨">치킨</option>
          <option value="피자">피자</option>
          <option value="곱창">곱창</option>
          <option value="삼겹살">살겹살</option>
          <option value="닭똥집">닭똥집</option>
        </select>
        <br />
        <button type="submit">전 송</button>
      </form>
    </>
  );
}
export default MyForm;
