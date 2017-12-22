import _random from 'lodash/random';
import _range from 'lodash/range';
import data from '../../data/tweet_words.json';
import { colors } from '../../styles/theme';

export const indexRange = 100;
export const lastIndex = data.length - 1;

export const getData = () => {
  const dataRange =
    _range(0, indexRange)
    .map(num =>
      ({
        word: data[_random(0, lastIndex)],
        isFalling: false,
        backgroundColor: colors[_random(0, 2)]
      })
    );
  return dataRange;
};

export default {
  getData,
  indexRange
};
