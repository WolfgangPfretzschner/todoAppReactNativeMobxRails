import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  TextField,
  Colors,
  Spacings,
  View,
  Button,
} from 'react-native-ui-lib';
import {observer, inject} from 'mobx-react';

@inject('todoStore')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', value: ''};
  }

  onTextChange(text) {
    this.setState({text: text});
  }

  handleAdd(){
    this.props.todoStore.addTodo(this.state.text);
    this.setState({text: ''})
  }

  render() {
    return (
      <View padding-s3>
        <Text text40 marginB-s5>
          Todo
        </Text>
        <TextField
          title="Whats to do?"
          placeholder="Enter Todo"
          hideUnderline
          value={this.state.text}
          onChangeText={(text) => this.onTextChange(text)}
          containerStyle={styles.input}
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.grey50,
            borderRadius: 4,
          }}
          enableErrors={false}
        />
        <Button
          fullWidth
          label="Add todo"
          marginB-10
          // ref={element => (this.button_20 = element)}
          onPress={() => this.handleAdd()}
        />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  input: {
    marginBottom: Spacings.s4,
  },
});
