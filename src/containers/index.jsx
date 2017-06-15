import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../reducers/apps/actions';
import * as appSelectors from '../reducers/apps/reducer';

const propTypes = {
  actions: PropTypes.object.isRequired,
};
const defaultProps = {};
const contextTypes = {
  store: PropTypes.object.isRequired,
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Index
      </div>
    );
  }
}

AppContainer.propTypes = propTypes;
AppContainer.defaultProps = defaultProps;
AppContainer.contextTypes = contextTypes;

const mapStateToProps = (state) => {
  const isLoaded = appSelectors.getIsLoaded(state);
  return { isLoaded };
};

const mapDispatchToProps = (dispatch) => {
  const actions = { ...appActions };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
