import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import CommentsArea from '../../CommentsArea';
import CommentInput from '../../CommentInput';
import styles from './CommentCard.styles';

export default function CommentCard() {
  const productSeperator = () => <View style={styles.product_seperator} />;

  const [data, setData] = useState([]);

  const handlecommentInput = comment => {
    if (!comment) {
      return;
    } else {
      const Commentdata = {
        name: comment,
      };
      setData([Commentdata, ...data]);
    }
  };

  const renderComment = ({item}) => <CommentsArea comment={item.name} />;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderComment}
        ItemSeparatorComponent={productSeperator}
      />
      <View style={styles.comment_input}>
        <CommentInput
          onButton={handlecommentInput}
          style={styles.ProductInput}
        />
      </View>
    </View>
  );
}
