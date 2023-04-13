import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import DetalhesConta from './DetalhesConta'
import Documentos from './Documentos'
import Estatistica from './Estatistica'

export default function Perfil(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name='Inicio' component={Inicio} options={{headerShown: false}}/>
            <Stack.Screen name='DetalhesConta' component={DetalhesConta} options={{headerShown: false}}/>
            <Stack.Screen name='Documentos' component={Documentos} options={{headerShown: false}}/>
            <Stack.Screen name='Estatisticas' component={Estatistica} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}
