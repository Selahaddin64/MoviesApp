import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

import Button from '../Button';
import styles from './CommentInput.styles';

export default function CommentInput({onButton}) {
  const [comment, setComment] = useState('');

  const handleCommentAdd = () => {
    onButton(comment);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Yorum Giriniz..</Text>
      <View style={styles.input_container}>
        <TextInput style={styles.input} onChangeText={setComment} />
        <View>
          <Button
            title="Gönder"
            onPress={handleCommentAdd}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}
