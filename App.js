import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage, UIManager } from 'react-native';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { LoadingScreen } from './app/components';

import { Colors } from './constants/Colors';

// import { fontAssets } from './helpers';
import Root from './app';

import store from './app/redux/store';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

EStyleSheet.build(Colors);
export default class App extends React.Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'user',
        ],
      },
      () => this.setState({ ready: true })
    );
  }
  render() {
    if (!this.state.ready) {
      return <LoadingScreen />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
