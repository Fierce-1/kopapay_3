import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const RotatingIcons = () => {
  const iconRotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(iconRotation, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  return (
    <AnimatedIcon
      name="spinner-3"
      size={20}
      color="#3467FF"
      style={{
        transform: [
          {
            rotate: iconRotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}
    />
  );
};

const CheckIcon = () => {
  return <Icon1 name="check-square" size={20} color="#3467FF" />;
};

const RotatingIconsContainer = ({param}) => {
    const credit = param.credit
    const selectedValue = param.selectedValue
    const selectedValueLoan = param.selectedValueLoan
    const selectedValueDay = param.selectedValueDay
    const repayment = param.repayment
    const interest = param.interest
    const date = param.date

    const navigation = useNavigation()

    const [icons, setIcons] = useState([1, 1, 1, 1]);
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setSecondsElapsed((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (secondsElapsed === 1) {
        setIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[0] = <CheckIcon />;
            return newIcons;
        });
        } else if (secondsElapsed === 2) {
        setIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[1] = <CheckIcon />;
            return newIcons;
        });
        } else if (secondsElapsed === 3) {
        setIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[2] = <CheckIcon />;
            return newIcons;
        });
        } else if (secondsElapsed === 4) {
        setIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[3] = <CheckIcon />;
            return newIcons;
        });
        } else if(secondsElapsed === 5){
            navigation.navigate('loan_preprocessing', {
                credit: credit,
                selectedValue: selectedValue,
                selectedValueLoan: selectedValueLoan,
                selectedValueDay: selectedValueDay,
                repayment: repayment,
                interest: interest,
                date: date})
        }
    }, [secondsElapsed]);

    return (
        <View style={styles.container}>
        {icons.map((icon, index) => (
            <View style={{marginTop: '9%', marginEnd: '5%'}} key={index}>{icon === 1 ? <RotatingIcons /> : icon}</View>
        ))}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',

  },
});

export default RotatingIconsContainer;
