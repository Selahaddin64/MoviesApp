import { StyleSheet, Dimensions } from "react-native";

const devicesize = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        padding: 10,
    },
    bottom_container:{
        margin: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    genre: {
        fontStyle: 'italic',
        marginVertical: 5,
    },
    director: {
        fontStyle: 'italic',
        marginVertical: 5,
        textAlign: 'right',
    },
    rate: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right',
    },
    brief: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    cast: {
        fontStyle: 'italic',
        marginVertical: 5,
        marginTop: 10,
        padding: 5,
    },
});