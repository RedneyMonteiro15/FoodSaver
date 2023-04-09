import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen(){

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('SignIn');
        }, 3500);
    
        return () => clearTimeout(timer);
      }, [navigation]);

    return(
        <View style={styles.containerSplash}>
            <Image source={require('../../assets/img/logo-branco.png')} style={styles.imgLogo}/>
            <ActivityIndicator size="large" color="#fff" style={styles.activityIndicator} />
        </View>
    )
}