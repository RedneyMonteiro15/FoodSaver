import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    titulo:{
        width: '100%',
        color: '#A0A0A0',
        fontSize: 20,
        borderBottomWidth: 0.5,
        borderColor: '#A0A0A0',
        textAlign: 'center',
        padding: 7,
        marginBottom: 15
    },
    box:{
        width: '90%',
    },
    card:{
        margin: 5,
        width: '30%'
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
    modalContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal:{
        width: '100%',
        padding: 30,
        paddingBottom: 70,
        borderRadius: 20,
        marginBottom: -10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    modalTitulo:{
        color: '#03D069',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 3
    },
    modalQuant:{
        color: '#A0A0A0',
        padding: 3,
        fontSize: 16
    },
    modalView:{
        flexDirection: 'row',
        margin: 10,
    },
    modalViewQuant:{
        padding: 10,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#A0A0A0',
        fontSize: 25,
        paddingTop: 15,
        
    },
    modalViewButton:{
        padding: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        borderRadius: 50,
        margin: 5
    },
    modalViewNormal:{
        backgroundColor: '#03D069',
    },
    modalViewMudado:{
        backgroundColor: '#DDD',
    },
    modalViewText:{
        color: '#fff',
        fontSize: 25
    },
    btPesqReceita:{
        width: '90%',
        backgroundColor: '#03D069',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    txtPesqReceita:{
        color: '#fff',
        fontSize: 18
    },
    receita:{
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    headerIcon:{
        color: "#03D069",
        width: '20%',
        backgroundColor: 'blue',
        alignItems: 'flex-end'
    }

});

export default styles;