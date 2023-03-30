import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MobileNumbersList = (props) => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
        </View>
        );
    return (
        <View style={styles.container}>
        <FlatList
            data={props.DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.toString()}
        />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '80%'
  },
  item: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default MobileNumbersList;
