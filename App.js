import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import { Colors } from './constants/Colors';

// import { fontAssets } from './helpers';
import Root from './app/Root';

import store from './app/redux/store';

EStyleSheet.build(Colors);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
