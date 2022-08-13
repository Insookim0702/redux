import { createStroe } from "./redux.js";
import { reducer } from "./reducer.js";
import { increase } from "./actions.js";

const store = createStroe(reducer);
store.subscribe(function () {
  console.log(store.getState());
});
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(decrease());
store.dispatch(decrease());
store.dispatch(reset());
