import React  from 'react';
import {Text, View} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Drawer_component = (props) => {

    return(
        <View style={props.drawerItem1}>
            <FontAwesome5 name={props.name} size={props.size} color={props.color}/>
            <Text style={props.drawerItemText1} onPress={props.onPress}>{props.text}</Text>
        </View>
    )
}

export default Drawer_component