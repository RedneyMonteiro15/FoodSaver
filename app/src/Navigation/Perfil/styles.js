import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    titulo:{
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        color: '#03D069',
        marginTop: 35,
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
    },
    list:{
        margin: 10
    },
    listTitulo:{
        fontSize: 16,
        color: '#A0A0A0',
        marginLeft: 10,
    },
    listItem:{
        alignItems: 'center',
        margin: 5
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '90%',
        backgroundColor: '#DDD',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: '#000',
        elevation: 5
    },
    itemText:{
        width:'70%',
        textAlign:'left',
        fontSize: 15,
        marginLeft: 20,
        color: '#A0A0A0'
    }
});

export default style;