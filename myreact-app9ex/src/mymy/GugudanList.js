import React, { memo } from "react";

const GugudanList = (props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <table>
        {/* map() 내애서 최상위 태그가 없으니까 에러 */}
        {arr.map((arr) => (
          <tr>
            {props.dan} * {arr} = {props.dan * arr}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default memo(GugudanList);
