import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import SwiperComponent from '../components/swiper';


export default function Swiper() {
    return (
        <View style={styles.container}>
          <SwiperComponent />
        </View>
      );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
  });
  
