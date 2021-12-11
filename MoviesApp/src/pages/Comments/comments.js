import React from "react";
import { View, Text } from "react-native";
import Error from "../../components/error";
import Loading from "../../components/loading";
import useFetch from "../../hooks/useFetch";

export default function detail({route}) {
    const {id} = route.params;
    const {error, loading, data} = useFetch(`${'http://192.168.1.103:8081/comments'}/${id}`);

    if(loading) {
        return <Loading />;
    }

    if(error) {
        return <Error />;
    }

    return (
        <View>
            <Text style={styles.title} >{data.comment}</Text>
        </View>
    );

}