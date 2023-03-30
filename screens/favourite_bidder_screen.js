import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import App_select_bidder from "../components/selectbidder";

const Favourite_bidder = () =>{
    return(

        <View style={styles.mainContainer}>
            <App_select_bidder/>
            <App_select_bidder/>
            <App_select_bidder/>
        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer:{
        flex: 1,
        padding: 10,
    }
})

export default Favourite_bidder;