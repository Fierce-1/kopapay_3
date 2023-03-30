import React  from 'react';
import {TouchableOpacity, Text} from 'react-native'


const Button = (props) => {

    return(
        <TouchableOpacity style={props.btnStyle} onPress={props.onPress} disabled={props.disabled}>
            <Text style={props.textStyle}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button