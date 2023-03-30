import React, {useState, useRef}  from 'react';
import {View, StyleSheet,Text, TouchableOpacity, ScrollView, Alert, PermissionsAndroid} from 'react-native'
import ExitApp from 'react-native-exit-app';
import App_text from '../components/text'
import App_icon from '../components/logo'
import Button from '../components/button'
import Popup from '../components/modal';


function Privacy({navigation}) {

    const scrollViewRef = useRef()
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent
        const isEndReached = contentOffset.y + layoutMeasurement.height >= contentSize.height
        setButtonEnabled(isEndReached)

    };

    const handleButtonClick = () => {
        setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const getAllPermissions = async () => {
        PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]).then(result => {
          if (
            result['android.permission.CAMERA'] === 'granted' &&
            result['android.permission.READ_CONTACTS'] === 'granted' &&
            result['android.permission.ACCESS_FINE_LOCATION'] === 'granted' && 
            result['android.permission.SEND_SMS'] === 'granted'
          ) {
            navigation.navigate('login')
          } else {
            Alert.alert('Permissions denied!', 'You need to give permissions');
            }
        });
    };
    const logo = require("../assets/images/kopaPay.jpeg");

    return(
        <View style={styles.container_parent_view}>
            <View>
                <App_icon imgStyle={styles.img} img={logo}/>
                <App_text textStyle={styles.text_bold_1} text="Privacy Policy" />
                <App_text textStyle={styles.text_bold} text="Privacy Policy" />
                <ScrollView style={styles.scrollView} ref={scrollViewRef} onScroll={handleScroll}>
                    <App_text textStyle={styles.text} text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
                </ScrollView>
            </View>
            <View style={styles.container_second_view}>
                <Button btnStyle={styles.btn_disagree} btnText="I Disagree" textStyle={styles.text_disagree} onPress={handleButtonClick}></Button>
                <Button btnStyle={styles.btn_agree} btnText="I Agree" textStyle={styles.text_agree} disabled={!buttonEnabled} onPress={getAllPermissions}></Button>
            </View>
            <Popup visible={showModal} onRequestClose={handleCloseModal}>
                <App_text textStyle={styles.text_bold_1} text="Notice"/>
                <App_text textStyle={styles.text_popup} text="In order to evaluate your qualifications and provide you with better services, we need your authorization to collect your relevant information. Please confirm whether to deny the permission and understand that this operation will exit the APP, or cancel the operation? "/>
                <View style={styles.container_second_view}>
                <Button btnStyle={styles.btn_disagree} btnText="Cancel" textStyle={styles.text_disagree} onPress={handleCloseModal}></Button>
                <Button btnStyle={styles.btn_agree} btnText="Confirm" textStyle={styles.text_agree} onPress={() => {ExitApp.exitApp()}}></Button>
                </View>
            </Popup>
        </View>
    )
}

const styles = StyleSheet.create({
    container_parent_view:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between'
    }, 
    scrollView: {
        height: '50%',
        width: '90%',
    },
    container_second_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '10%'
    },
    img:{
        width: 170, 
        height: 200,
        alignSelf: 'center'
    },
    text: {
        marginStart: '10%',
        marginTop: '3%',
        color: 'black'
    },
    text_popup: {
        textAlign: 'justify',
        marginTop: '5%',
        marginBottom: '10%',
        color: 'black'
    },

    text_bold: {
        marginTop: '2%',
        marginStart: '10%',
        color: 'black',
        fontWeight: 'bold'
    },
    text_bold_1: {
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 18
    },
    btn_disagree:{
        width: '40%',
        padding: '5%',
        borderWidth: 2,
        borderColor: '#07EFE1',
        borderRadius: 10
    },
    btn_agree:{
        width: '40%',
        padding: '5%',
        borderWidth: 2,
        borderColor: '#07EFE1',
        borderRadius: 10, 
        backgroundColor: '#07EFE1'
    },
    text_disagree: {
        color: '#07EFE1',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    text_agree: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Privacy