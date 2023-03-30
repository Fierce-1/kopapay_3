import React  from 'react';
import {View, Text, StyleSheet} from 'react-native'


const App_text = (props) => {
    return(
        <Text style={props.textStyle}>{props.text}</Text>
    )
}

export default App_text