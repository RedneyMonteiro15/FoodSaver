import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    box:{
        width: '90%',
        flexDirection: 'row',
    },
    card:{
        width: '30%',
        margin: 6,
    },
    cardImg:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDD',
        borderRadius: 10,
    },
    imgCard:{
        margin: 10,
    },
    cardTxt:{
        textAlign: 'center',
        color: '#A0A0A0'
    },
});

export default styles;