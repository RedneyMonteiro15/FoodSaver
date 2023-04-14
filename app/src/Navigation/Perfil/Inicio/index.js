import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, Linking} from 'react-native';
import styles from '../styles';
import { ScrollView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SECTIONS = [
    {
        header: 'Preferencias',
        items: [
            { icon: 'user', color: '#8e8d91', text: 'Detalhes da conta' },
            { icon: 'file', color: '#fd2d54', text: 'Documentos'},
            { icon: 'activity', color: '#007afe', text: 'Estatisticas'},
            { icon: 'chrome', color: '#32c759', text: 'Web Site'},
        ]
    },
    {
        header: 'Ajuda',
        items: [
          { icon: 'flag', color: '#8e8d91', text: 'Reportar problema', },
          { icon: 'mail', color: '#007afe', text: 'Contata-nos', },
          { icon: 'phone-call', color: '#007afe', text: 'Ligar para nós', },
        ],
      },
      {
        header: 'Sobre Nós',
        icon: 'align-center',
        items: [
          { icon: 'facebook', color: '#007afe', text: 'Facebook',},
          { icon: 'instagram', color: '#fd2d54', text: 'Instagram'},
          { icon: 'youtube', color: '#fd2d54', text: 'You Tube'},
          { icon: 'twitter', color: '#007afe', text: 'Twitter'},
        ],
      },
]

export default function Inicio(){

    const navigation = useNavigation();

    const navegar = (icon) => {
        switch (icon) {
            case 'user':
                navigation.navigate('DetalhesConta')
                break;

            case 'file':
                navigation.navigate('Documentos')
                break;

            case 'activity':
                navigation.navigate('Estatisticas')
                break;
            case 'chrome':
                goTo('https://redneymonteiro15.github.io/FoodSaver')
                break;
            case 'flag':
                goTo('https://redneymonteiro15.github.io/FoodSaver/reportar');
                break;
            case 'mail':
                goTo('mailto:exemplo@email.com');
                break;
            case 'phone-call':
                goTo('tel:123456789');
                break;
            case 'facebook':
                goTo('https://www.facebook.com/');
                break;
            case 'instagram':
                goTo('https://www.instagram.com/');
                break;
            case 'youtube':
                goTo('https://www.youtube.com/');
                break;
            case 'twitter':
                goTo('https://www.twitter.com/');
                break;
        }
    }

    const goTo = (url) => {
        Linking.openURL(url);
    }

    return(
        <ScrollView>
            <Text style={styles.titulo}>Meu Perfil</Text>
            <View style={styles.viewBox}>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../../assets/ingredientes/arroz.png')}
                            />
                        <Text style={styles.cardQuant}>0</Text>
                        <Text style={styles.cardText}>Alimentos salvos semanais</Text>
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../../assets/ingredientes/arroz.png')}
                            />
                        <Text style={styles.cardQuant}>0</Text>
                        <Text style={styles.cardText}>Alimentos salvos</Text>
                    </View>
                </View>
            </View>
            {SECTIONS.map(({header, items}) => (
                <View style={styles.list} key={header}>
                    <Text style={styles.listTitulo}>{header}</Text>
                    {items.map(({icon, color, text}) => (
                        <View style={styles.listItem} key={icon}>
                            <TouchableOpacity style={styles.item} onPress={() => navegar(icon)}>   
                                    <Feather name={icon} size={24} style={{backgroundColor: color, padding: 7, borderRadius: 50, color: '#fff'}} />
                                    <Text style={styles.itemText}>{text}</Text>
                                    <Feather name="chevron-right" size={24} color="#A0A0A0" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            ))}

        </ScrollView>
    )
}