import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Alert, FlatList, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import * as funcao from './funcao'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import Receita from './Receita';
import ListReceitas from './ListReceitas';




const INGREDIENTES = [
    { id: 1, nome: 'Arroz', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 2, nome: 'Feijão', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 3, nome: 'Cebola', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 4, nome: 'Alho', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 5, nome: 'Tomate', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 6, nome: 'Pimentão', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 7, nome: 'Massa', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 8, nome: 'Acuçar', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 9, nome: 'Manteiga', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 10, nome: 'Farinha', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 11, nome: 'Leite', imagem: require('../../../assets/ingredientes/arroz.png') },
    { id: 12, nome: 'Pimentão', imagem: require('../../../assets/ingredientes/arroz.png') },
    
  ];

export default function Home(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name='Inicio' component={Inicio} options={{headerShown: false}}/>
            <Stack.Screen name='ListReceitas' component={ListReceitas} options={{headerShown: false}}/>
            <Stack.Screen name='Receita' component={Receita} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
