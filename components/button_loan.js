import React  from 'react';
import {TouchableOpacity, Text, View} from 'react-native'


const Button_loa = (props) => {

    return(
        <TouchableOpacity key={props.key1} style={props.btnStyle} onPress={props.onPress} disabled={props.disabled}>
            <Text style={props.textStyle}>{props.btnText}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={props.textStyle1}>{props.btnText1}</Text>
                <Text style={props.textStyle2}>{props.btnText2}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button_loa