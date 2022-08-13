export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
// 다른 계정으로 올려버려서 다시 올림
export function createStroe(reducer) {
  let state;
  let handlers = [];
  // 바깥 쪽에서 상태를 변경할 시점을 트리거하는 함수
  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  // 상태 변경을 감지해서 외부에 반환
  function subscribe(handler) {
    handlers.push(handler);
  }
  function getState() {
    return state;
  }
  return { dispatch, getState, subscribe };
}

/**
 * @description createStore의 state를 외부에서 변경해주기 위한 함수.
 * 중간에 worker를 사용하는 이유는 createStore의 state를 참조하지 않도록 하기 위함.
 * FLUX 구조에서 봤듯이, 상태 변경을 한 방향으로만 해주기 위함.
 */
// function worker(state = { count: 0 }, action) {
//   // 파라미터로 받은 state는 원본을 참조하고 있으므로, 이를 그대로 수정하면 참조 무결성이 깨진다. 깊은 복사로 이 문제를 해결한다.
//   switch (action.type) {
//     case "increase":
//       return { ...state, count: state.count + 1 };
//     default:
//       return { ...state };
//   }
// }
