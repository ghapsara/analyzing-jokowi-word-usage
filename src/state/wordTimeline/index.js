import { combineEpics } from 'redux-observable';

import reducers from './reducers';
import {
  startAutoSelectEpic,
  stopAutoSelectEpic,
  onAppScrollEpic
} from './operations';

export const wordTimelineEpics = combineEpics(
  startAutoSelectEpic,
  stopAutoSelectEpic,
  onAppScrollEpic
);

export { default as wordTimelineOperations } from './operations';
export { default as wordTimelineUtilities } from './utils';

export default reducers;
