import React, { Component } from "react";
import store from "../store";

export default class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        {/* Redux 사용 */}
        <input
          type="button"
          value="+"
          onClick={function () {
            store.dispatch({ type: "INCREMENT", size: this.state.size }); //action에 저장이 된다.
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

// export default class AddNumber extends Component {
//     state = { size: 1 };
//     render() {
//       return (
//         <div>
//           <h1>Add Number</h1>
//           {/* + 버튼 클릭 시 size 값이 상위 컴포넌트로 전달될 수 있게 onclick을 구현
//               props로 전달받은 onClick 함수를 호출하는데 현재 컴포넌트의 state인 size값을 전달한다.
//               this.props.onClick: 이 함수는 부모 컴포넌트에서 전달된 콜백 함수이다.
//               즉, 상위 컴포넌트(AddNumberSuper)에서 작성해줘야한다.
//               */}
//           <input
//             type="button"
//             value="+"
//             onClick={function () {
//               this.props.onClick(this.state.size);
//             }.bind(this)}
//           ></input>
//           <input
//             type="text"
//             value={this.state.size}
//             onChange={function (e) {
//               this.setState({ size: Number(e.target.value) });
//             }.bind(this)}
//           ></input>
//         </div>
//       );
//     }
//   }
