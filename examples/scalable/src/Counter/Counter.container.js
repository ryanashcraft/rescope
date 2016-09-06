import { connect } from 'react-redux';

import Counter from './Counter';

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = {
  increment: () => {
    return {
      type: 'INCREMENT',
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
