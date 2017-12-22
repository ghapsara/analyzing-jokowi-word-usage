import wordData from '../../data/total_word_distribution.json';
import tweetData from '../../data/total_tweets_in_every_hour.json';

export const getWordData = () => {
  return wordData;
};

export const getTweetData = () => {
  return tweetData;
}

export default {
  getWordData,
  getTweetData
};
