import { combineEpics } from 'redux-observable';
import reducers from './reducers';
import {
  startAddIndexEpic,
  addIndexEpic,
  selectDataEpic,
  startAddIndexOnScrollEpic,
  stopAddIndexOnScrollEpic
} from './operations';

export const introductionEpics = combineEpics(
  startAddIndexEpic,
  addIndexEpic,
  selectDataEpic,
  startAddIndexOnScrollEpic,
  stopAddIndexOnScrollEpic
);

export { default as introductionOperations } from './operations';
export { default as introductionUtilities } from './utils';

export default reducers;
