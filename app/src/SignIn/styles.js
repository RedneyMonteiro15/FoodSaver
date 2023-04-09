import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    imgLogo:{ 
        width: 250, 
        height: 100,
        marginTop: 70,
    },
    form:{
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
    },
    input:{
        width: '90%',
        backgroundColor: '#DDD',
        color: '#A0A0A0',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#03D069',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10
    },
    btLogin:{
        width: '90%',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#03D069',
        borderRadius: 20,
        alignItems: 'center'
    },
    txtBtLogin:{
        color: '#fff',
        fontSize: 19
    },
    txtEsqueceu:{
        textAlign: 'right',
        width: '90%',
        color: '#A0A0A0',
        fontSize: 15,
        marginTop: 10
    },
    txtCriar:{
        width: '100%',
        textAlign: 'center',
        color: '#A0A0A0',
        fontSize: 15,
        marginBottom: 10,
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        padding: 5,
    }

});

export default styles;