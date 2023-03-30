import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Date_Box = (props) => {
  const [date, setDate] = useState(new Date()); // initialize date state variable with the current date
  const [showDatePicker, setShowDatePicker] = useState(false); // initialize state variable to control visibility of date picker
  const datepickerRef = useRef(null);
  const [dateSelected, setDateSelected] = useState(false);

  const onPressDate = () => {
    setShowDatePicker(true); // show the date picker when the user clicks on the calendar icon
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; // if no date was selected, use the current date
    setShowDatePicker(false); // hide the date picker after the user has selected a date
    setDate(currentDate);
    setDateSelected(true);
    props.input(currentDate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{backgroundColor:'white',color:'#AF9999',marginStart:'4%'}}
        placeholder='2005-01-01'
        placeholderTextColor='#AF9999'
        value={dateSelected ? date.toISOString().slice(0, 10) : ''}
        editable={false}

      />
      <TouchableOpacity onPress={onPressDate}>
        <FontAwesome name="calendar" size={20} color="#555555" style={styles.calendarIcon} />
      </TouchableOpacity>
      {showDatePicker && (
        <DatePicker
          ref={datepickerRef}
          value={date}
          mode="date"
          placeholder="Select Date"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate={new Date(2005, 0, 1)}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'white',
    justifyContent:'space-between',
    borderRadius: 50,
    elevation: 5,
    overflow:'hidden'
  },
  calendarIcon: {
    marginEnd:'4%'
  },
});

export default Date_Box;
