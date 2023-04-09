import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    viewButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#DDD',
        padding: 10,
        borderRadius: 10
    },
    button:{
        width: '49%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    txtButton:{
        fontSize: 18,
        fontWeight: '600'
    },
    buttonVerde:{
        backgroundColor: '#03D069',
    },
    txtButtonBranco:{
        color: '#fff'
    },
    buttonNormal:{
        backgroundColor: '#DDD',
    },
    txtButtonVerde:{
        color: '#03D069'
    },
    card:{
        backgroundColor: '#DDD',
        marginTop: 20,
        borderRadius: 20,
        padding: 20,
    },
    cardTitulo:{
        fontSize: 20,
        color: '#03D069',
        fontWeight: '900',
        margin: 10
    },
    cardIcon:{
        flexDirection: 'row'
    },
    cardTxt:{
        fontSize: 18,
        color: '#A0A0A0'
    }
})

export default styles;
