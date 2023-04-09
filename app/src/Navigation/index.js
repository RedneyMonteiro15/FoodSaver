import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/index.js';
import Historico from './Historico/index.js';
import Perfil from './Perfil/index.js';
import { MaterialCommunityIcons , Fontisto, MaterialIcons } from '@expo/vector-icons';

export default function Navigation(){

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#03D069',
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons 
                        name="home-filled"
                        size={focused ? 35 : 30}
                        style={focused ? styles.iconModificado : styles.iconNormal}/>
                    ),
                  }}/>
            <Tab.Screen name='Historico' component={Historico} options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#03D069',
                    tabBarIcon: ({focused}) => (
                        <Fontisto 
                        name="history"
                        size={focused ? 35 : 30}
                        style={focused ? styles.iconModificado : styles.iconNormal}/>
                    ),
                  }}/>
            <Tab.Screen name='Perfil' component={Perfil} options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#03D069',
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons  
                        name="account"
                        size={focused ? 35 : 30}
                        style={focused ? styles.iconModificado : styles.iconNormal}/>
                    ),
                  }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconNormal:{
      color: '#ccc'
    },
    iconModificado:{
      width: 60,
      height: 60,
      backgroundColor: '#03D069',
      color: '#fff',
      marginBottom: 25,
      padding: 12,
      borderRadius: 30,
  
    }
  });
