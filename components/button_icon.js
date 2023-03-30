import React  from 'react';
import {TouchableOpacity, Text, View} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Button_ico = (props) => {

    return(
        <TouchableOpacity style={props.btnStyle} onPress={props.onPress} disabled={props.disabled}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <FontAwesome name={props.name} size={props.size} color={props.color} />
                <Text style={props.textStyle}>{props.btnText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button_ico