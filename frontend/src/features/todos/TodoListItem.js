import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Animated} from 'react-native';
import {
  Colors,
  Typography,
  View,
  Drawer,
  Text,
  ListItem,
  Checkbox,
  TextField,
} from 'react-native-ui-lib'; //eslint-disable-line
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {inject, observer} from 'mobx-react';

const shareIcon = require('assets/icons/full-trash.png');


@inject('todoStore')
@observer
class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `${props.todo.title}`,
      done: props.todo.done,
      line: new Animated.Value(0),
      itemsTintColor: undefined,
      hideUnderline: false,
      underlineColor: undefined,
      disabled: false,
      centered: false,
      useHelperText: false,
      titleColor: undefined,
      multiline: false,
      typography: 70,
      charCount: 0,
    };
  }


  onCheck = () => {
    
    if (this.state.done === false) {
      Animated.timing(this.state.line, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      this.setState({done: true});
    } else {
      Animated.timing(this.state.line, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      this.setState({done: false});
    }
  };

  onTextChange = (text) => {
    this.setState({text: text});
  };

  onItemPress(id){
    this.props.todoStore.deleteTodo(id)
  }

  renderContent() {
    const {
      hideUnderline,
      underlineColor,
      guidingText,
      titleColor,
      disabled,
      centered,
      useHelperText,
      multiline,
      charCount,
      typography,
      error,
    } = this.state;

    const {todo} = this.props;

    return (
      <ListItem
        key={todo.id}
        style={styles.listContent}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <ListItem.Part left>
              <Checkbox
                value={this.state.done}
                onValueChange={() => this.onCheck()}
                style={{marginHorizontal: 15}}
              />
            </ListItem.Part>
            <ListItem.Part middle containerStyle={styles.border}>
              <TextField
                style={{paddingTop: 32}}
                onChangeText={(text) => this.onTextChange(text)}
                value={this.state.text}
                key={centered ? 'centered' : 'not-centered'}
                {...{[`text${typography}`]: true}}
                placeholder={disabled ? 'Disabled' : 'Placeholder'}
                hideUnderline={true}
                underlineColor={underlineColor}
                titleColor={titleColor}
                helperText={useHelperText ? 'Helper Text' : undefined}
                editable={!disabled}
                centered={centered}
                multiline={multiline}
                maxLength={charCount > 0 ? charCount : undefined}
                showCharacterCounter={charCount > 0}
              />
            </ListItem.Part>
          </View>
          <Animated.View
            style={{
              borderBottomWidth: 1,
              zIndex: 99,
              position: 'absolute',
              transform: [
                {
                  translateY: this.state.line.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 33],
                  }),
                },
              ],
              width: '100%',
            }}
          />
          {this.props.children}
        </View>
      </ListItem>
    );
  }

  render() {
    const {todo } = this.props
    return (
      <Drawer
        key={todo.id}
        rightItems={[
          {
            icon: shareIcon,
            text: 'Delete',
            onPress: () => this.onItemPress(todo.id),
          },
        ]}
        style={styles.drawer}>
        {this.renderContent()}
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  // border:{
  //   borderBottomWidth: 1,
  //    bottom: 30
  // },
  contentContainer: {
    paddingBottom: 50,
  },
});

export default gestureHandlerRootHOC(DrawerScreen);
