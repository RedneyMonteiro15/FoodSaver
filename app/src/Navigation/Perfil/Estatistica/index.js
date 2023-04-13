import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, FlatList} from 'react-native';
import styles from '../styles';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Estatisticas(){
    const navigation = useNavigation();

 
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <Entypo name="arrow-long-left" style={styles.headerIcon}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Atividade Semanal</Text>
            </View>
            <ScrollView contentContainerStyle={styles.estatistica}>
                <View style={styles.viewGrafico}>

                </View>
                <View style={styles.viewInfoGrafico}>

                </View>
            </ScrollView>
        </View>
    )
}