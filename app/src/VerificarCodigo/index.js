import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function VerificarCodigo(){

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <Image source={require('../../assets/img/logo.png')} style={styles.imgLogo}/>
            <View style={styles.form}>
                <TextInput 
                placeholder='Codigo'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType='email'
                textContentType='emailAddress'
                style={styles.input}
                />
                <TouchableOpacity style={styles.btLogin}>
                    <Text style={styles.txtBtLogin}>Verificar</Text>
                </TouchableOpacity>
                <Text style={styles.txtReenviar}>Reenviar código</Text>
            </View>
            <Text style={styles.txtCriar} onPress={() => navigation.navigate('Register')}>Não tenho uma conta. Toque para criar uma agora.</Text>
        </View>
    )
}
