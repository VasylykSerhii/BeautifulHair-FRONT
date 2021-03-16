import { AnyAction } from "redux";
import { SET_STATE_HOOKS_ACTION } from "./actions-types";

export interface IChatState {
  scrollDir: string;
  offsetTop: number;
  loading: boolean;
}

const initialState: IChatState = {
  scrollDir: "",
  offsetTop: null,
  loading: false,
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_STATE_HOOKS_ACTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}