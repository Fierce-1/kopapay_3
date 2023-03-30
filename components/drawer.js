import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {Image, View, StyleSheet, Text} from 'react-native'
import React, {useState} from 'react';
import Home from '../screens/home';
import App_icon from './logo';
import Drawer_component from './drawer_comp';
import Loan_s from '../screens/loan_status';

function Drawer_navigator({route}){
    const { selectedValue, selectedValueLoan, selectedValueDay, repayment, interest, date} = route.params
    const Drawer = createDrawerNavigator()
    const logo=require('../assets/images/kopa.png')
    const CustomDrawerHeader = ({navigation}) => {
        return (
            <View style={styles.container2}>
                <View style={styles.container1('15%')}>
                    <App_icon img={logo}/>
                </View>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="home" color="black" size={20} onPress={() => navigation.navigate('Home')} text="Home"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="money-bill" color="black" size={20} onPress={() => navigation.navigate('loan_status', 
                    {
                        selectedValue: selectedValue,
                        selectedValueLoan: selectedValueLoan,
                        selectedValueDay: selectedValueDay,
                        repayment: repayment,
                        interest: interest,
                        date: date
                    }
                )} text="Loan Status"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="blender" color="black" size={20} onPress={() => navigation.navigate('Become a Lender')} text="Become A Lender"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="user-times" color="black" size={20} onPress={() => navigation.navigate('profile')} text="Profile"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="money-bill" color="black" size={20} onPress={() => navigation.navigate('bid_loan')} text="Bid Loan"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="money-bill" color="black" size={20} onPress={() => navigation.navigate('loan_status', 
                    {
                        screen: 'Repayment',
                        selectedValue: selectedValue,
                        selectedValueLoan: selectedValueLoan,
                        selectedValueDay: selectedValueDay,
                        repayment: repayment,
                        interest: interest,
                        date: date
                    }
                )} text="Repay loan"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="clipboard-list" color="black" size={20} onPress={() => navigation.navigate('Transaction Records')} text="Records"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="comments" color="black" size={20} onPress={() => navigation.navigate('chat')} text="Live Chat"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="bell" color="black" size={20} onPress={() => navigation.navigate('Notifications')} text="Notification"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="search-location" color="black" size={20} onPress={() => navigation.navigate('ads')} text="Ads"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="search-location" color="black" size={20} onPress={() => navigation.navigate('loan_status')} text="Logbook Loans"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="envelope" color="black" size={20} onPress={() => navigation.navigate('Contact us')} text="Contact Us"/>
                <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} onPress={() => navigation.navigate('loan_status')} text="Log Out"/>

                <View style={styles.container1('13.35%')} />
            </View>
        );
      };

  
    return(
        <Drawer.Navigator  drawerContent={props => <CustomDrawerHeader {...props} />} screenOptions={() => ({
            headerShown: false,
            headerTintColor: '#FFFFFF',
            drawerStyle:{borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
            },
            headerTitleStyle: {
                color: '#05F000'
            },
            headerStyle: {
                backgroundColor: '#05F000',
                elevation: 0
            }})}>
            <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({

    container1: (height) => ({
        backgroundColor: '#05F000',
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    container2: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden'
      },

      drawerItem: {
        padding: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#05F000',
        color: 'black',
        flexDirection: 'row',
      },
      drawerItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginStart: '2%'
      },
})

export default Drawer_navigator