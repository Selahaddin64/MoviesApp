import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,} from 'react-native';
import styles from './MoviesCard.styles';

export default function MoviesCard({item, onSelect}) {
  // const tableColor = item.isActive ? 'green' : '#bdbdbd';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.container, {borderColor: tableColor}]}> 
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{item.name}</Text>
          <Text style={styles.rate}>{item.rate}</Text>
          <Text style={styles.genre}>{item.genre}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}