import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Perfil(){

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu Perfil</Text>
            <View style={styles.viewBox}>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/ingredientes/arroz.png')}
                            />
                        <Text style={styles.cardQuant}>0</Text>
                        <Text style={styles.cardText}>Alimentos salvos semanais</Text>
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/ingredientes/arroz.png')}
                            />
                        <Text style={styles.cardQuant}>0</Text>
                        <Text style={styles.cardText}>Alimentos salvos</Text>
                    </View>
                </View>
            </View>
            <View>
                
            </View>
        </View>
    )
}
