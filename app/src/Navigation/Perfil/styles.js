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
    },
    
    header:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        padding: 10
    },
    headerIcon:{
        color: "#03D069",
        fontSize: 40,
        textAlign: 'left'
    },
    headerText:{
        color: '#03D069',
        fontSize: 26,
        width: '70%',
        textAlign: 'center'
    },
    btLogout:{
        width: '90%',
        margin: 10,
        backgroundColor: '#DDD',
        borderRadius: 20,
        padding: 10
    },
    btLogoutText:{
       color: 'red',
       fontSize: 15,
       textAlign:'center' 
    },
    btAtualizar:{
        width: '90%',
        margin: 10,
        backgroundColor: '#03D069',
        borderRadius: 20,
        padding: 10
    },
    btAtualizarText:{
        color: '#fff',
        fontSize: 15,
        textAlign:'center' 
    },
    renderDocumento:{
        width: '90%',
        backgroundColor: '#DDD',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        elevation: 4
    },
    renderDocumentoTitulo:{
        textAlign: 'center',
        color: '#717F7F',
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 10,
    },
    renderDocumentoDatas:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    renderDocumentoData:{
        flexDirection: 'row',
        
    },
    renderDocumentoDataIcon:{
        color: '#03D069',
        fontSize: 30
    },
    renderDocumentoDataText:{
        color: '#717F7F',
        fontSize: 16,
        padding: 5,

    },
    renderDocumentoButttons:{
        flexDirection: 'row',
    },
    renderDocumentoButtton:{
        width: '47%',
        backgroundColor: '#03D069',
        padding: 10,
        margin: 5,
        borderRadius: 20,
    },
    renderDocumentoButttonText:{
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    estatistica:{
        alignItems: 'center',
    },
    viewGrafico:{
        width: '90%',
        margin: 10,
        height: 200,
        backgroundColor: '#DDD',
    },
    viewInfoGrafico:{
        width: '90%',
        margin: 10,
        height: 200,
        backgroundColor: '#DDD',
    }


});

export default style;