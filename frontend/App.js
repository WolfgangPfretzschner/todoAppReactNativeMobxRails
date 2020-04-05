/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import stores from './src/app/mobx';
// import AppNavigator from 'src/Navigation/RootNavigation';
import {SafeAreaView, StatusBar} from 'react-native';
import TodoList from './src/features/todos/TodoList';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider {...stores}>
        <TodoList />
      </Provider>
    </>
  );
};

export default App;
