import { createEpicMiddleware } from 'redux-observable';

import { map } from 'rxjs/add/operator/map';
import { mergeMap } from 'rxjs/add/operator/mergeMap';
import { filter } from 'rxjs/add/operator/filter';
import { debounceTime } from 'rxjs/add/operator/debounceTime';
import { takeUntil } from 'rxjs/add/operator/takeUntil';

// epics root here

import { rootEpics } from '../state';

const epicMiddleware = createEpicMiddleware(
  rootEpics, {
    dependencies: {
      map,
      mergeMap,
      filter,
      debounceTime,
      takeUntil
    }
  }
);

export default epicMiddleware;

