import { StyleSheet, Dimensions } from "react-native";

const devicesize = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        padding: 10,
    },
    image: {
        width: devicesize.width,
        height: devicesize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    description: {
        fontStyle: 'italic',
        marginVertical: 5,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right',
    },
});