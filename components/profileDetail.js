import React from 'react'
import { View, Text } from 'react-native'

const Profile_Detail = (props) =>{
    return(
        <View style={props.viewDetail}>
            <Text style={props.textDetail1}>{props.data1}</Text>
            <Text style={props.textDetail2}>{props.data2}</Text>
        </View>
    )
}

export default Profile_Detail;
