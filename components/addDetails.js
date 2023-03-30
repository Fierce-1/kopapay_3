import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Add_Detail = (props) =>{
    return(
        <View style={props.viewDetail}>
            <Text style={props.textDetail1}>{props.data1}</Text>
            <TouchableOpacity style={props.textDetail2} onPress={props.onPress} ><Text style={{color:'#14FA47',fontSize:18}} >Add <FontAwesome name="plus-circle" color={'#14FA47'} size={18} /> </Text></TouchableOpacity>
        </View>
    )
}

export default Add_Detail;
