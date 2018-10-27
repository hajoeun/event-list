import { createAction, handleActions } from 'redux-actions';

const GO = 'go';
const STOP = 'stop';

export const go = createAction(GO);
export const stop = createAction(STOP);

export default handleActions({
  [GO]: (state, action) => ({ visibleLength: state.visibleLength + action.diff }),
  [STOP]: state => state,
}, { visibleLength: 8 })