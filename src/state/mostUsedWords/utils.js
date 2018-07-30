import data from '../../data/words_most_jokowi.json';

export const getData = () => {
  return data.map((w, i) => {
    const rank = i + 1;
    return {
      ...w,
      isSelected: false,
      rank
    }
  });
};

export default {
  getData
};
