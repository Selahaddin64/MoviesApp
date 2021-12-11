import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MoviesCard.styles';

export default function MoviesCard({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{item.name}</Text>
          <View>
            <Text style={styles.rate}>{item.rate}</Text>
            <Icon name="star" size={25} />
          </View>
          <Text style={styles.genre}>{item.genre} </Text>
          <Text style={styles.brief} numberOfLines={2} ellipsizeMode="tail">
            {item.brief}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
