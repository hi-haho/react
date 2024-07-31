import React, { useState } from "react";

const Gugudan = () => {
  const [dan, setDan] = useState(2);

  const gugu = (e) => {
    setDan(e.target.value);
  };
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      단 입력 : <input type="text" value={dan} onChange={gugu} />
      <br />
      <br />
      <br />
      <table border={1}>
        {num.map((num, index) => (
          <tr>
            <td>
              {dan} * {num} = {dan * num}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Gugudan;
