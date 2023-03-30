import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

const Record = () =>{
    const [transaction,setTransaction] = React.useState([
        {'date':'02/20/2023','action':'Deposited','amount':'Ksh 20000'},
        {'date':'02/21/2023','action':'Withdrawn','amount':'Ksh 5000'},
        {'date':'02/22/2023','action':'Deposited','amount':'Ksh 10000'}
    ]);

    return(
        <ScrollView contentContainerStyle={styles.mainView}>
            {transaction.map((item, index) => (
                <View style={styles.transactionView} key={index}>
                    <Text style={styles.text('35%')}>{item.date}</Text>
                    <Text style={styles.text('35%')}>{item.action}</Text>
                    <Text style={styles.text('20%')}>{item.amount}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default Record;

const styles = StyleSheet.create({
    mainView : {
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    transactionView : {
        height:50,
        width:'90%',
        borderRadius:10,
        margin:'2%',
        borderColor:'#0095FF',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    text : (width) => ({
        color:'black',
        width:width,
        fontSize:12,
        fontWeight:'bold',
    })
});