import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles.js';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function SignIn(){

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const navigation = useNavigation();

    const linkar = () => {
        Alert.alert('Linkar');
    }


    return(
        <View style={styles.container}>
            <Image source={require('../../assets/img/logo.png')} style={styles.imgLogo}/>
            <View style={styles.form}>
                <TextInput 
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType='email'
                textContentType='emailAddress'
                style={styles.input}
                />
                <TextInput 
                    placeholder='Palavra passe'
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity style={styles.btLogin} onPress={() => navigation.navigate('Navigation')}>
                    <Text style={styles.txtBtLogin}>Login</Text>
                </TouchableOpacity>               
                <Text style={styles.txtEsqueceu} onPress={() => navigation.navigate('EsqueceuSenha')}>Esquceu a senha?</Text>
            </View>
            <Text style={styles.txtCriar} onPress={() => navigation.navigate('Register')}>Não tenho uma conta. Toque para criar uma agora.</Text>
        </View>
    )
}
