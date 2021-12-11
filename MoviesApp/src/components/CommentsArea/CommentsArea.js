import React from 'react';
import {View, Text} from 'react-native';
import styles from './CommentsArea.styles';

const CommentsArea = ({comment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{comment}</Text>
    </View>
  );
};

export default CommentsArea;