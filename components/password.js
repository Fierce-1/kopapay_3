import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={props.styleInput}>
      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeHolderColor}
        onChangeText={props.input}
        value={props.pass}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{marginRight:'4%'}} >
        <Icon name="ios-eye" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color:'black'
  },
});

export default PasswordInput;
