import React from 'react'
import { TextInput } from 'react-native'

const Input_Box = (props) =>{
    return(
        <TextInput style={props.styleInput} onChangeText={props.input} placeholder={props.placeholder} placeholderTextColor={props.placeHolderColor}  />
    )
}

export default Input_Box;