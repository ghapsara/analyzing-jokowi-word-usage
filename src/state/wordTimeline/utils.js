import data from '../../data/total_word_in_every_hour.json';

export const lengthData = data.length;

export const getData = () => {
  return data
};

export const getWordList = () => {
  return data.map((d, i) => ({
    index: i,
    word: d.word,
    total: d.total
  }));
};

export const getDataByWord = (word) => {
  return data.find(d => d.word === word);
};

export const getDataByIndex = (index) => {
  return data[index];
};

export const getSelectedWordByIndex = (index) => {
  const { word, total } = data[index];

  return {
    word,
    total
  };
};

export default {
  getData,
  lengthData,
  getDataByWord,
  getWordList,
  getDataByIndex,
  getSelectedWordByIndex
};
