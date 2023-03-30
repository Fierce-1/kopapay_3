import React from 'react'
import { TextInput, View } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal';

const Phone_Box = (props) =>{
    return (
        <View style={props.container} >
      <CountryPicker
        countryCode={props.code}
        withAlphaFilter
        withCallingCode
        withCallingCodeButton
        onSelect={props.inputCode}
        containerButtonStyle={props.countryPicker}
        
      />
      <TextInput
        style={props.styleInput}
        keyboardType="phone-pad"
        placeholder={props.placeholder}
        value={props.phone}
        onChangeText={props.inputPhone}
        placeholderTextColor={props.placeHolderColor}
      />
    </View>
      );
}

export default Phone_Box;


