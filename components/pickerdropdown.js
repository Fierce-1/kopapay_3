import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Dropdown = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }
        style={styles.picker}
        dropdownIconColor="blue"
        
      >
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    // marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  picker: {
    height: 50,
    width: '100%',
    color: 'black',
  },


});

export default Dropdown;
