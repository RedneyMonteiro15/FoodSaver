import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    titulo:{
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        color: '#03D069',
        marginTop: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: '#A0A0A0',
    },
    viewBox:{
        alignItems: 'center',
        margin: 20
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        
    },
    card:{
        backgroundColor: '#DDD',
        width: '48%',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10
    },
    cardQuant:{
        fontSize: 30,
        color: '#03D069',
        fontWeight: 'bold'
    },
    cardText:{
        fontSize: 15,
        textAlign: 'center',
        color: '#A0A0A0'
    }
});

export default style;