import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Colors,
  Typography,
  View,
  Drawer,
  Text,
  Button,
  ListItem,
  Avatar,
  AvatarHelper,
  Checkbox,
  TextField,
} from 'react-native-ui-lib';
import {inject, observer} from 'mobx-react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import TodoListItem from 'src/features/todos/TodoListItem';
import Header from 'src/features/header/Header';

@inject('todoStore')
@observer
class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  
  renderListOfTodos() {
    return this.props.todoStore.todos.map((todo) => {
      return <TodoListItem todo={todo} key={todo.id} />;
    });
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'column', marginTop:10}}>
        <Header />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {this.renderListOfTodos()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: 3,
  },
  // border:{
  //   borderBottomWidth: 1,
  //    bottom: 30
  // },
  contentContainer: {
    paddingBottom: 5,
  },
});

export default gestureHandlerRootHOC(TodoList);
