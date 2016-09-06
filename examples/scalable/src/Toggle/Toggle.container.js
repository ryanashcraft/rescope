import { connect } from 'react-redux';

import Toggle from './Toggle';

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = {
  toggle: () => {
    return {
      type: 'TOGGLE',
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
