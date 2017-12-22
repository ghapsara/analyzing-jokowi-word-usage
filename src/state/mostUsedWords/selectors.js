export const getSelectedWord = (state) => {
  const data = state.mostUsedWords.data;

  const selectedWord = data.find(d => d.isSelected);

  const value = selectedWord === undefined ? null: selectedWord;

  return value;
};

export const getSelectedWordIndex = (data, word) => {
  return data.findIndex(d => d.word === word);
}

export default {
  getSelectedWord
};
