import React  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/button';

const App_select_bidder = (props) => {
    return(
        <View style={styles.maincontainer}>
            
            <View style={styles.subcontainer}>
                <Text style={styles.txt}>Name</Text>
                <Text style={styles.nametxt}>Jonathan</Text>
            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.txt}>Crucial documents provided</Text>
                <Text style={styles.txt}>6/10</Text>
            </View>
            <View style={styles.subcontainer}>
                <Button btnStyle={styles.selectbtn} textStyle={styles.txtbtn} btnText="Select"/>
                <Text style={styles.txt}>credit Score 1/10</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    maincontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0095FF',
        margin: '2%',
        padding: '5%',
        height: '14%'
    },
    subcontainer:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    selectbtn:{
        backgroundColor: '#77FF95',
        borderRadius: 8,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtbtn:{
        color: 'black',
        fontWeight: 'bold',
        
    },
    nametxt:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 12,
    },
    txt:{
        color: 'black',
        fontSize: 11,
    }



});

export default App_select_bidder;