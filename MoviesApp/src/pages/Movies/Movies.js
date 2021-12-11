import React from 'react';
import {FlatList} from 'react-native';
import Error from '../../components/error';
import Loading from '../../components/loading';

import MoviesCard from '../../components/cards/MoviesCard';
import useFetch from '../../hooks/useFetch/useFetch';
import routes from '../../navigation/routes';

export default function Movies({navigation}) {

  const {error, data, loading} = useFetch('http://192.168.1.103:8081/movies');
  console.log(data);
  const handleNavigateMoviesDetail = id => {
    navigation.navigate(routes.MOVIES_DETAİL_SCREEN, {id});
  };

  const renderMovies = ({item}) => (
    <MoviesCard
      item={item}
      onSelect={() => handleNavigateMoviesDetail(item.id)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderMovies} />;
}
