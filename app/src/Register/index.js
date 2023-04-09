import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

export default function Register(){

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
                <TouchableOpacity style={styles.btLogin}>
                    <Text style={styles.txtBtLogin}>Registar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtCriar} onPress={() => navigation.navigate('SignIn')}>Tenho uma conta. Toque para iniciar seção.</Text>
        </View>
    )
}
