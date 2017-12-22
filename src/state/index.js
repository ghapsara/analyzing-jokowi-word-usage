import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { default as appReducers } from './app';
import { default as mostUsedWordsReducers, mostUsedWordsEpics } from './mostUsedWords';
import { default as wordTimelineReducers, wordTimelineEpics } from './wordTimeline';
import { default as totalWordReducers, totalWordEpics } from './totalWord';
import { default as introductionReducers, introductionEpics } from './introduction';

export const rootEpics = combineEpics(
  mostUsedWordsEpics,
  wordTimelineEpics,
  totalWordEpics,
  introductionEpics
);

export const rootReducers = combineReducers({
  app: appReducers,
  mostUsedWords: mostUsedWordsReducers,
  wordTimeline: wordTimelineReducers,
  totalWord: totalWordReducers,
  introduction: introductionReducers
});

export default rootReducers;
