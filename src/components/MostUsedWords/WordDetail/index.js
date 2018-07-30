import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mostUsedWordsSelectors } from '../../../state/mostUsedWords';
import Detail from './Detail';

class SelectedWord extends React.Component {
  render() {
    const { selectedWord } = this.props;

    const shouldRender = selectedWord != null;

    return ( shouldRender &&
      <Detail
        data={selectedWord}
      />
    );
  }
}

SelectedWord.propTypes = {
  selectedWord: PropTypes.object
};

const mapStateToProps = (state) => ({
  selectedWord: mostUsedWordsSelectors.getSelectedWord(state)
});

export default connect(mapStateToProps)(SelectedWord);
