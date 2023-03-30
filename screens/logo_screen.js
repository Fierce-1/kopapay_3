import React, {useEffect}  from 'react';
import {View, StyleSheet} from 'react-native'
import App_icon from '../components/logo';
import App_text from '../components/text';


function Logo(props) {

    useEffect(() => {
        setTimeout(() => {
          props.navigation.replace('term_condition');
        }, 3000);
      }, []);

    const logo = require("../assets/images/kopaPay.jpeg");
    
    return(
        <View style={styles.contianer}>
            <App_icon img={logo}/>
            <App_text textStyle={styles.text} text="Your Financial Freedom" />
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    }, 
    text:{
        color: '#479DE5'
    }
})

export default Logo