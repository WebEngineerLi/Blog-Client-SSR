import { handleActions as createReducer } from 'redux-actions';

export interface initStateProps {
  isCollapsed: boolean;
  _persist: any
}

export const initState: initStateProps = {
  isCollapsed: false,
  _persist: {}
}

const reducers = createReducer({
  dump(state, { payload }) {
    return {
      ...state,
      ...payload
    }
  },
  changeCollapsed(state) {
    return {
      ...state,
      isCollapsed: !state.isCollapsed
    }
  }
}, initState)

export default reducers;