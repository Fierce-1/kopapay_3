import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const BecomeLender = ({navigation}) => {
    return(
        <View style={{backgroundColor:'white',alignItems:'center',flex:1}}>
            <TouchableOpacity style={{backgroundColor:'#14FA47',justifyContent:'center',alignItems:'center',width:'80%',height:40,borderRadius:8,margin:'5%'}} onPress={() => navigation.navigate('lender')} >
                <Text style={{color:'black',fontSize:14,fontFamily:'Montserrat'}}>Click to Create a Lender Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BecomeLender;