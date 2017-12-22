import { combineEpics } from 'redux-observable';

import reducers from './reducers';
import {
  startAutoSelectEpic,
  onSelectEpic,
  onAppScrollEpic,
  scrollToStopSelectEpic,
  scrollToStartSelectEpic,
  srollToHideHelperEpic
} from './operations';

export const mostUsedWordsEpics = combineEpics(
  startAutoSelectEpic,
  onSelectEpic,
  onAppScrollEpic,
  scrollToStopSelectEpic,
  scrollToStartSelectEpic,
  srollToHideHelperEpic
);

export { default as mostUsedWordsOperations } from './operations';
export { default as mostUsedWordsSelectors } from './selectors';

export default reducers;
