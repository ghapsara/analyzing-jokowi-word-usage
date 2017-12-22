import { Observable } from 'rxjs/Rx';
import types from './types';
import appTypes from '../app/types';
import actions from './actions';

export const {
  startAutoSelect,
  onSelect,
  autoSelect,
  setSectionPosition,
  setChartPosition
} = actions;

const {
  stopAutoSelect
} = actions;

const autoSelectDelayPeriod = 0;
const autoSelectTimePeriod = 3000;

export const startAutoSelectEpic = (action$) => {
  const stop$ = Observable.merge(
    action$.ofType(types.ON_SELECT),
    action$.ofType(types.STOP_AUTO_SELECT)
  )

  return action$.ofType(types.START_AUTO_SELECT)
    .mergeMap(() =>
      Observable.timer(autoSelectDelayPeriod, autoSelectTimePeriod)
        .takeUntil(stop$)
        .map(() => autoSelect())
    )
};

export const onAppScrollEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { selection, sectionPosition, chartPosition } = store.getState().wordTimeline;
      const { windowScrollY } = action.payload;

      const chartBottomPosition = chartPosition.offsetTop + chartPosition.clientHeight;

      const desiredSection = windowScrollY >= sectionPosition.offsetTop && windowScrollY <= chartBottomPosition;

      const shoudStartAutoSelect = desiredSection && !selection.isAutoSelecting;

      return shoudStartAutoSelect;
    })
    .map(() => startAutoSelect());
};

export const stopAutoSelectEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { selection, sectionPosition, chartPosition } = store.getState().wordTimeline;
      const { windowScrollY } = action.payload;

      const chartBottomPosition = chartPosition.offsetTop + chartPosition.clientHeight;

      const desiredSection = windowScrollY < sectionPosition.offsetTop || windowScrollY > chartBottomPosition;

      const shoudStopAutoSelect = desiredSection && selection.isAutoSelecting;

      return shoudStopAutoSelect;
    })
    .map(() => stopAutoSelect());
};

export default {
  startAutoSelect,
  onSelect,
  autoSelect,
  setSectionPosition,
  setChartPosition
};
