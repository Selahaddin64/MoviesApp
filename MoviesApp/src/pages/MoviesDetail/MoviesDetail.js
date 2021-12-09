import React from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";
import Error from "../../components/error";
import Loading from "../../components/loading";
import useFetch from "../../hooks/useFetch";

import styles from './MoviesDetail.styles';

export default function detail({route, onButton}) {
    const [comment, setComment] = useState();

    const handleCommentAdd = () => {
        onButton(comment);
      };
    
    const {id} = route.params;
    const {error, loading, data} = useFetch(`${Config.API_URL}/${id}`);
    
    if(loading) {
        return <Loading />;
    }

    if(error) {
        return <Error />;
    }

    return (
        <View style={styles.container} >
            <View style={styles.body_container} >
                <Text style={styles.title} >{data.name}</Text>
                <Text style={styles.rate} >{data.rate} </Text>
                <Text style={styles.genre} >{data.genre}</Text>
                <View style={styles.container} >
                    <Text style={styles.director} >{data.director}</Text>
                    <Text style={styles.brief} >{data.brief}</Text>
                    <Text style={styles.cast} >{data.cast}</Text>
                </View>
                <View>
                    <Input label="Yorum Giriniz" onChangeText={value => setComment(value)} />
                    <Button title="Gönder" onPress={handleCommentAdd} />
                </View>
            </View>
        </View>
    );
}