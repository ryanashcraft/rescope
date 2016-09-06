import { connect } from 'react-redux';

import KittenWidget from './KittenWidget';

const mapStateToProps = (state) => {
  return {
    size: state,
  };
};

const mapDispatchToProps = {
  changeSize: () => {
    return {
      type: 'CHANGE_SIZE',
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(KittenWidget);
