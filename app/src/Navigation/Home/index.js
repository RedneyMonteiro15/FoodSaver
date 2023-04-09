import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';


export default function Home(){

    return(
        <View style={styles.container}>
            <Text>Escolhe seus ingredientes</Text>
            <View style={styles.box}>
                <View style={styles.card}>
                    <View style={styles.cardImg}>
                        <Image 
                        source={require('../../../assets/ingredientes/arroz.png')} 
                        style={styles.imgCard}/>
                        
                    </View>
                    <Text style={styles.cardTxt}>Arroz</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImg}>
                        <Image 
                        source={require('../../../assets/ingredientes/arroz.png')} 
                        style={styles.imgCard}/>
                        
                    </View>
                    <Text style={styles.cardTxt}>Arroz</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImg}>
                        <Image 
                        source={require('../../../assets/ingredientes/arroz.png')} 
                        style={styles.imgCard}/>
                        
                    </View>
                    <Text style={styles.cardTxt}>Arroz</Text>
                </View>
            </View>
        </View>
    )
}
