import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Alert, FlatList, TouchableWithoutFeedback} from 'react-native';
import styles from '../styles';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const RECEITAS = [
    {id: 1, nome: 'Bacalhau com natas',},
]

export default function ListReceitas(){

    const navigation = useNavigation();

    const renderReceita = ({ item }) => (
        <TouchableOpacity style={styles.btRenderReceita} onPress={() => navigation.navigate('Receita', {id: item.id})}>
            <View style={styles.cardReceita}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../../assets/ingredientes/arroz.png')} />
                    </View>
                    <Text style={styles.cardReceitaTitulo}>Nome</Text>
                    <View style={styles.cardReceitaIcon}>
                        <Entypo name="location-pin" size={30} color="#03D069" />
                        <Text style={styles.cardReceitaTxt}>Regional</Text>
                    </View>
                    <View style={styles.cardReceitaIcon}>
                        <MaterialIcons name="access-time" size={30} color="#03D069" />
                        <Text style={styles.cardReceitaTxt}>30min</Text>
                    </View>
                </View>
        </TouchableOpacity>
      );
    return(
        <View style={styles.receita}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <Entypo name="arrow-long-left" style={styles.headerIcon}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Receitas</Text>
            </View>
            <FlatList 
                data={RECEITAS}
                renderItem={renderReceita}
                keyExtractor={item => item.id}
            />
        </View>
    )
}