import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { introductionOperations } from '../../../state/introduction';
import Detail from './Detail';

class Introduction extends React.Component {
  componentDidMount() {
    this.props.startAddIndex();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((item, index) => {
          const { word, isFalling, backgroundColor } = item;
          return (isFalling &&
            <Detail
              key={index}
              word={word}
              isFalling={item.isFalling}
              backgroundColor={backgroundColor}
            />
          );
        })}
      </div>
    );
  }
}

Introduction.propTypes = {
  data: PropTypes.array.isRequired,
  startAddIndex: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  data: state.introduction.data
})

const mapDispatchToProps = (dispatch) => {
  const {
    startAddIndex
  } = bindActionCreators(introductionOperations, dispatch);

  return {
    startAddIndex
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
