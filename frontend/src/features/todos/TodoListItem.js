import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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
      active: 0,
      value1: false,
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
    if (this.state.active === 0) {
      this.setState({active: 1});
      this.setState({value1: true});
    } else {
      this.setState({active: 0});
      this.setState({value1: false});
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
                value={this.state.value1}
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
          <View
            style={{
              borderBottomWidth: 1,
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
