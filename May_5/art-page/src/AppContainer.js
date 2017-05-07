import App from './App';
import { connect } from 'react-redux';
import * as actions from './actions';

const AppContainer = connect(
  state => state,

  actions
)(App);

export default AppContainer;
