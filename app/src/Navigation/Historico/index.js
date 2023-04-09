import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Historico(){

    const [showFav, setShowFav] = useState(true);

    const change = (bool) => {
        setShowFav(bool);
    }

    return(
        <View style={styles.container}>
           <View style={styles.viewButton}>
                <TouchableOpacity 
                    style={[styles.button, showFav ? styles.buttonVerde : styles.buttonNormal]}
                    onPress={() => change(true)}>
                    <Text style={[styles.txtButton, showFav ? styles.txtButtonBranco : styles.txtButtonVerde]}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, showFav ? styles.buttonNormal : styles.buttonVerde]}
                    onPress={() => change(false)}>
                    <Text style={[styles.txtButton, showFav ? styles.txtButtonVerde : styles.txtButtonBranco]}>Guardados</Text>
                </TouchableOpacity>
           </View>
            <ScrollView>
                <View style={styles.card}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../assets/ingredientes/arroz.png')} />
                    </View>
                    <Text style={styles.cardTitulo}>Nome</Text>
                    <View style={styles.cardIcon}>
                        <Entypo name="location-pin" size={30} color="#03D069" />
                        <Text style={styles.cardTxt}>Regional</Text>
                    </View>
                    <View style={styles.cardIcon}>
                        <MaterialIcons name="access-time" size={30} color="#03D069" />
                        <Text style={styles.cardTxt}>30min</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
