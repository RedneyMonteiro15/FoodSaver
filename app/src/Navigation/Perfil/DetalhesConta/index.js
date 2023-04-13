import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import styles from '../styles';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function DetalhesConta(){
    const navigation = useNavigation();

    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <Entypo name="arrow-long-left" style={styles.headerIcon}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Perfil</Text>
            </View>
            <ScrollView>
                <Image source={require('../../../../assets/ingredientes/arroz.png')}/>
                <TouchableOpacity style={styles.btAtualizar}>
                    <Text style={styles.btAtualizarText}>Atualizar</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.btLogout}>
                <Text style={styles.btLogoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}