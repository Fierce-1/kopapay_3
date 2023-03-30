import React  from 'react';
import {TouchableOpacity, Text, View} from 'react-native'


const Button_settle = (props) => {

    return(
        <TouchableOpacity style={props.btnStyle} onPress={props.onPress} disabled={props.disabled}>
            <Text style={props.textStyle}>{props.btnText}</Text>
            <Text style={props.textStyle1}>{props.btnText1}</Text>
        </TouchableOpacity>
    )
}

export default Button_settle