import { 
  SET_STATE_HOOKS_ACTION, 
  SET_LOADING_HOOKS_ACTION,
  SET_SCROLLDIR_ACTION,
  SET_OFFSETTOP_ACTION
} from "./actions-types";
import { IChatState } from "./reducers";

export const setStateCreation = (payload: Partial<IChatState>) => {
  return {
    type: SET_STATE_HOOKS_ACTION,
    payload,
  };
};

export const setLoadingCreation = (bool) => {
  return {
    type: SET_LOADING_HOOKS_ACTION,
    bool
  };
};
export const setScrollDirCreation = (dir) => {
  return {
    type: SET_SCROLLDIR_ACTION,
    dir
  };
};
export const setOffsetTopCreation = (number) => {
  return {
    type: SET_OFFSETTOP_ACTION,
    number
  };
};

const chatActionCreators = {
  setStateCreation,
  setLoadingCreation,
};

export default chatActionCreators;