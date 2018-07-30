import { Observable } from 'rxjs/Rx';
import types from './types';
import appTypes from '../app/types';
import actions from './actions';
import { getSelectedWordIndex } from './selectors';
import { height as chartHeight } from '../../components/MostUsedWords/Visualization/constants';

const {
  autoSelect,
  setOnSelectIndex,
  showChart,
} = actions;

export const {
  addCoordinateData,
  renderSpiralLine,
  renderSpiralPoints,
  onSelect,
  startAutoSelect,
  stopAutoSelect,
  onHelperClick,
  setSectionPosition
} = actions;


export const startAutoSelectEpic = (action$, store) => {
  const stopper$ = Observable.merge(
    action$.ofType(types.ON_SELECT),
    action$.ofType(types.STOP_AUTO_SELECT)
  )

  return action$.ofType(types.START_AUTO_SELECT)
    .mergeMap(() => {

      return Observable.timer(3000, 5000)
        .takeUntil(stopper$)
        .map(() => {
          const { data, dataSelection } = store.getState().mostUsedWords;

          const selectedIndex = dataSelection.currentSelectedIndex % data.length;

          const selectedWord = data[selectedIndex].word;

          return autoSelect(selectedWord);
        })
    }
    )
};

export const onSelectEpic = (action$, store) => {
  return action$.ofType(types.ON_SELECT)
    .map(action => {
      const { word } = action.payload;
      const data = store.getState().mostUsedWords.data;

      const selectedIndex = getSelectedWordIndex(data, word) + 1;

      return setOnSelectIndex(selectedIndex);
    })
};

export const onAppScrollEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { chart, sectionPosition } = store.getState().mostUsedWords;
      const { windowScrollY } = action.payload;

      const sectionTopPosition = sectionPosition.offsetTop - 100;
      const chartBottomPosition = sectionPosition.offsetTop + chartHeight;
      const desiredPosition = windowScrollY >= sectionTopPosition && windowScrollY <= chartBottomPosition;

      const desiredChartCondition = !chart.isChartVisible;

      const shouldRenderChart = desiredPosition && desiredChartCondition;

      return shouldRenderChart;
    })
    .map(() => showChart());
};

export const scrollToStopSelectEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { chart, dataSelection, sectionPosition } = store.getState().mostUsedWords;
      const { windowScrollY } = action.payload;

      const desiredCondition = chart.isChartVisible && dataSelection.isAutoSelecting;

      const sectionTopPosition = sectionPosition.offsetTop - 100;
      const chartBottomPosition = sectionPosition.offsetTop + chartHeight;
      const desiredPosition = windowScrollY < sectionTopPosition || windowScrollY > chartBottomPosition;

      const shouldStopAutoSelect = desiredPosition && desiredCondition;

      return shouldStopAutoSelect;
    })
    .map(() => stopAutoSelect());
};

export const scrollToStartSelectEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { chart, dataSelection, sectionPosition } = store.getState().mostUsedWords;
      const { windowScrollY } = action.payload;

      const desiredCondition = chart.isChartVisible && !dataSelection.isAutoSelecting;

      const sectionTopPosition = sectionPosition.offsetTop - 100;
      const chartBottomPosition = sectionPosition.offsetTop + chartHeight;
      const desiredPosition = windowScrollY >= sectionTopPosition && windowScrollY <= chartBottomPosition;

      const shouldStartAutoSelect = desiredPosition && desiredCondition;

      return shouldStartAutoSelect;
    })
    .map(() => startAutoSelect());
};

export const srollToHideHelperEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;

      const { helperVisibility, sectionPosition } = store.getState().mostUsedWords;
      const sectionTopPosition = sectionPosition.offsetTop - 100;
      const chartBottomPosition = sectionPosition.offsetTop + chartHeight + 100;

      const desiredPosition = windowScrollY < sectionTopPosition ||
        windowScrollY > chartBottomPosition;

      const shouldHideHelper = helperVisibility && desiredPosition;
      return shouldHideHelper;
    })
    .map(() => onHelperClick())
};

export default {
  addCoordinateData,
  renderSpiralLine,
  renderSpiralPoints,
  onSelect,
  startAutoSelect,
  stopAutoSelect,
  onHelperClick,
  setSectionPosition
};
