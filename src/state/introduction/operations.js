import { Observable } from 'rxjs/Rx';
import types from './types';
import appTypes from '../app/types';
import actions from './actions';
import { indexRange } from './utils';

export const {
  startAddIndex,
  stopAddIndex,
  setPosition
} = actions;

const {
  addIndex,
  selectData
} = actions;

export const startAddIndexEpic = (action$) => {
  return action$.ofType(types.START_ADD_INDEX)
    .mergeMap(() =>
      Observable.timer(2000, 1000)
        .takeUntil(action$.ofType(types.STOP_ADD_INDEX))
        .map(() => addIndex())
    );
};

export const addIndexEpic = (action$, store) => {
  return action$.ofType(types.ADD_INDEX)
    .map(action => {
      const index = store.getState().introduction.index;

      return selectData(index);
    });
};

export const selectDataEpic = (action$) => {
  return action$.ofType(types.SELECT_DATA)
    .filter(action => {
      const { index } = action.payload;

      return index > indexRange;
    })
    .mergeMap(() =>
      Observable.of(
        stopAddIndex(),
        startAddIndex()
      )
    );
};

export const stopAddIndexOnScrollEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { position, indexLoop } = store.getState().introduction;

      const { offsetTop, clientHeight } = position;

      const sectionPosition = (offsetTop + clientHeight);

      const desiredPosition = windowScrollY < offsetTop || windowScrollY > sectionPosition;

      const shouldStop = desiredPosition && indexLoop;

      return shouldStop;
    })
    .map(() => stopAddIndex())
};

export const startAddIndexOnScrollEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { position, indexLoop } = store.getState().introduction;

      const { offsetTop, clientHeight } = position;

      const sectionPosition = (offsetTop + clientHeight);

      const desiredPosition = windowScrollY >= offsetTop && windowScrollY <= sectionPosition;

      const shouldStart = desiredPosition && !indexLoop;

      return shouldStart;
    })
    .map(() => startAddIndex());
};

export default {
  startAddIndex,
  setPosition
};
