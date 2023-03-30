import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Notification = () =>{
    const [notifications,setNotifications] = React.useState([
        {'date':'02/20/2023','notification':'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum'},
        {'date':'03/20/2023','notification':'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum'}
    ]);
    const [selectedValue, setSelectedValue] = React.useState('male');

    return(
        <ScrollView contentContainerStyle={styles.mainView}>
            <View style={styles.dropDownWrapper}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.dropDownStyle}
                    mode="dropdown"
                    dropdownIconColor="black"
                    >
                    <Picker.Item label="All" value="all" />
                    <Picker.Item label="Mark as all Read" value="Mark as all Read" />
                    <Picker.Item label="Read Notification" value="Read Notification" />
                    <Picker.Item label="Unread Notification" value="Unread Notification" />
                </Picker>
            </View>

            {notifications.map((item, index) => (
                <View key={index}>
                    <View style={styles.notificationView}>
                    <Text style={styles.text('0%')}>{item.notification}</Text>
                    </View>
                    <Text style={styles.text('3%')}>{item.date}</Text>
                </View>
            ))}
            
        </ScrollView>
    )
}

export default Notification;

const styles = StyleSheet.create({
    mainView : {
        flexGrow:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    notificationView : {
        width:'90%',
        borderRadius:10,
        margin:'2%',
        borderColor:'#0095FF',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:'2%'
    },
    text : (margin)=> ({
        color:'black',
        fontSize:12,
        marginStart:margin
    }),
    dropDownStyle: {
        backgroundColor: 'white',
        color: 'black'
      },
      dropDownWrapper: {
        backgroundColor:"white",
        borderRadius: 50,
        height:50,
        overflow:'hidden',
        elevation: 5,
        marginBottom:10,
        width:'40%',
        margin:'2%',
        alignSelf:'flex-start'
      },
});