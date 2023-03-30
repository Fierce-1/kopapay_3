import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ContactUs = (props) =>{
    return(
        <View style={styles.mainView}>
            <Text style={styles.text('bold',20)}>Online service</Text>
            <Text style={styles.text('bold')}>email:      <Text style={styles.text('normal')}>kopapaykenya@gmail.com</Text></Text>
            <Text style={styles.text('normal',25)}>                 support@kopapay.com</Text>
            <Text style={styles.text('bold',15)}>Service time:: 24hrs</Text>
        </View>
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'#F4FFFE',
        padding:'5%'
    },
    text: (weight,marg)=>({
        fontWeight:weight,
        color:'black',
        fontSize:18,
        marginBottom:marg
    })
})