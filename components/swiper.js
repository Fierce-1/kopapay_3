import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const Button = ({ index, active, onPress, zoomValue }) => {
    const [pressed, setPressed] = useState(false);
  
    const handlePressIn = () => {
      setPressed(true);
    };
  
    const handlePressOut = () => {
      setPressed(false);
    };
  
    const handlePress = () => {
      onPress(index);
    };
  
    const scale = zoomValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.2],
    });
  
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        style={[
          styles.button,
          active && styles.activeButton,
          { transform: [{ scale }] },
          pressed && styles.pressedButton,
        ]}
      />
    );
  };

 const SwiperWithButtons = () => {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const zoomValue = useRef(new Animated.Value(0)).current;
  
    const handleZoomIn = () => {
      Animated.timing(zoomValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };
  
    const handleZoomOut = () => {
      Animated.timing(zoomValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };
  
    const handleButtonPress = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <View style={styles.container}>
        <Swiper loop={false} index={activeIndex} showsPagination={false}>
          {[0, 1, 2, 3].map((index) => (
            <View style={styles.slide} key={index}>
              <Button
                index={index}
                active={index === activeIndex}
                onPress={handleButtonPress}
                zoomValue={zoomValue}
              />
            </View>
          ))}
        </Swiper>
        <PanGestureHandler
          onGestureEvent={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              if (nativeEvent.translationX > 50 && activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
              } else if (
                nativeEvent.translationX < -50 &&
                activeIndex < 3
              ) {
                setActiveIndex(activeIndex + 1);
              }
            }
          }}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.END) {
              handleZoomIn();
            } else if (
              nativeEvent.state === State.CANCELLED ||
              nativeEvent.state === State.FAILED
            ) {
              handleZoomOut();
            }
          }}
        >
          <View style={styles.gestureHandler} />
        </PanGestureHandler>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ccc',
      marginHorizontal: 10,
    },
    activeButton: {
      backgroundColor: '#333',
    },
    pressedButton: {
      backgroundColor: '#999',
    },
    gestureHandler: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent',
    },
  });

  export default SwiperWithButtons
  