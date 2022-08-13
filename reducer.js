import { INCREASE, DECREASE, RESET } from "./action-type";
/**
 * @description createStore의 state를 외부에서 변경해주기 위한 함수.
 * 중간에 worker를 사용하는 이유는 createStore의 state를 참조하지 않도록 하기 위함.
 * FLUX 구조에서 봤듯이, 상태 변경을 한 방향으로만 해주기 위함.
 */
export function reducer(state = { count: 0 }, action) {
  // 파라미터로 받은 state는 원본을 참조하고 있으므로, 이를 그대로 수정하면 참조 무결성이 깨진다. 깊은 복사로 이 문제를 해결한다.
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}
