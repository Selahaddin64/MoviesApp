import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './input.styles';

export default function Input({label, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput onChangeText={onChangeText} />
      </View>
    </View>
  );
}
