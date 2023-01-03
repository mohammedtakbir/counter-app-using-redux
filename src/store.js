import { createStore } from "redux";
import counterReducer from "./services/Reducers/CounterReducer";

const store = createStore(counterReducer);
export default store;