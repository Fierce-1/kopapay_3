import React  from 'react';
import {View, Text, StyleSheet} from 'react-native';


const App_currencyframe = (props) => {
    return(
        <View style={props.containerStyle}>
            <Text style={props.currencytxt}>{props.text1}</Text>
            <Text style={props.amounttxt}>{props.text2}</Text>
        </View>
    )
}

export default App_currencyframe