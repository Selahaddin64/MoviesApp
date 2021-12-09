import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from "react-native-config";
import Error from "../../components/error";
import Loading from "../../components/loading";

import styles from './Movies.styles';
import MoviesCard from '../../components/cards/MoviesCard';
import useFetch from "../../hooks/useFetch";
import routes from '../../navigation/routes';

export default function Movies({navigation}) {

  const {error, data, loading} = useFetch(Config.API_URL);

  function handleNavigateMoviesDetail(movieData) {
    navigation.navigate(routes.MOVIES_DETAİL_SCREEN, {movie: movieData});
  }
  
    const renderMovies = ({item}) => (
      <MoviesCard item={item} onSelect={() => handleNavigateMoviesDetail(item)} />
    );

    if(loading) {
      return <Loading />;
  }

  if (error) {
      return <Error />
  }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={data} renderItem={renderMovies} numColumns={2} />
      </SafeAreaView>
    );
  }
  