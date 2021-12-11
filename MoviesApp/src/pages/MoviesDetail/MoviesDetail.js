import React from 'react';
import {View, Text} from 'react-native';
import Error from '../../components/error';
import Loading from '../../components/loading';
import useFetch from '../../hooks/useFetch';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MoviesDetail.styles';
import CommentCard from '../../components/cards/CommentCard';

export default function detail({route}) {
  const {id} = route.params;
  const {error, loading, data} = useFetch(
    `${'http://192.168.1.103:8081/movies'}/${id}`
  );

  // + `${'http://192.168.1.103:8081/comments'}/${id}`

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  // async function componentDidMount() {
  //     try{
  //         const [data, data1] = await Promise.all([
  //         axios.get(`${'http://192.168.1.103:8081/movies'}/${id}`),
  //         axios.get(`${'http://192.168.1.103:8081/comments'}/${id}`)
  //         ]);
  //     }
  //     catch(err){
  //         console.log(err)
  //     }
  // }

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.rate}>{data.rate} </Text>
        <Text style={styles.genre}>{data.genre}</Text>
        <Text style={styles.director}>{data.director}</Text>
        <Text style={styles.brief}>{data.brief}</Text>
        <Text style={styles.cast}>{data.cast}</Text>
        <Text style={styles.cast}>{data.comment}</Text>
        <CommentCard />
      </View>
    </View>
  );
}
