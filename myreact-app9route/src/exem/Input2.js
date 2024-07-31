import React, { useState } from "react";

const Input2 = () => {
  const [params, setParams] = useState({ name: "", age: "", addr: "" });

  const { name, age, addr } = params;
  const changeFunc = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setParams({
      //해당 값이 갱신된다
      ...params,
      [id]: value,
    });
  };
  return (
    <div>
      <br />
      <div>
        <label for="name">이름 : </label>
        <input type="text" value={name} id="name" onChange={changeFunc} />
      </div>

      <div>
        <label for="age">나이 : </label>
        <input type="text" value={age} id="age" onChange={changeFunc} />
      </div>

      <div>
        <label for="addr">주소 : </label>
        <input type="text" value={addr} id="addr" onChange={changeFunc} />
      </div>
      <br />
      <h3>처리 결과</h3>
      <table border={1}>
        <tr>
          <th>🐉이름은🦖</th>
          <th>🙉나이는🙈</th>
          <th>👻주소는🌞</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{addr}</td>
        </tr>
      </table>
    </div>
  );
};
export default Input2;
