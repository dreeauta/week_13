import App from './app';
import { connect } from 'react-redux';
import * as actions from './MovieWidget.actions';



const AppContainer = connect(
  state => ({search: state.search}),

  actions

)(App);

export default AppContainer;
