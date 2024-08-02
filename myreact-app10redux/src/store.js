import { legacy_createStore as createStore } from "redux";
//리듀서함수: 애플리케이션 상태를 변환하는 함수 : A상태 -> B상태
//state와 action을 전달받아 상태를 변환후 반환
//역할 1) action type을 분석
//역할 2) 이전 상태를 다음 상태로 교체
//역할 3) 다음 상태를 반환
//createStore(리듀서함수)
export default createStore(function (state, action) {
  //state : data 값
  //action : data에 가해지는 행위
  if (state === undefined) {
    return { number: 0 }; //number를 초기화
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({}));

//creatStore 두번째 매개 변수 REDUX_DEVTOOLS를 사용하기 위한 지정값
