import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Alert, FlatList, TouchableWithoutFeedback} from 'react-native';
import styles from '../styles';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';




export default function Receita(){
    const route = useRoute();
    const {id}  = route.params;
    const navigation = useNavigation();

    return(
        <View style={styles.receita}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('ListReceitas')}>
                    <Entypo name="arrow-long-left" style={styles.headerIcon}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Receita</Text>
            </View>
            <View style={styles.body}>
                <Image source={require('../../../../assets/img/logo.png')} style={{width: '100%'}}/>
                <Text style={styles.nomeReceita}>Bacalhau com natas</Text>
                <Text style={styles.subTituloReceita}>Ingredientes</Text>
                <View style={styles.lstIngredientes}>
                    <Text style={styles.itemLstIngredientes}>1. Bacallhau...</Text>
                </View>
                <Text style={styles.subTituloReceita}>Modo Preparo</Text>
                <Text style={styles.modoPreparo}>Modo de preparar é o seguinte....</Text>
                <View style={styles.bodyInfo}>
                    <Entypo name="location-pin" style={styles.bodyInfoIcon} />
                    <Text style={styles.bodyInfoText}>Regional ou não</Text>
                </View>
                <View style={styles.bodyInfo}>
                    <MaterialIcons name="access-time" style={styles.bodyInfoIcon} />
                    <Text style={[styles.bodyInfoText, {padding: 2}]}>30min</Text>
                </View>
                <Text style={styles.subTituloReceita}>Informações nutricionais</Text>
                <Text style={styles.modoPreparo}>....</Text>
                <View style={[styles.lstInfoNutri, styles.lstIngredientes]}>
                    <View style={styles.itemLstInfoNutri}>
                        <FontAwesome name="check" style={styles.itemLstInfoNutriIconGreen} />  
                        <Text style={styles.itemLstInfoNutriText}>Diabetico</Text>
                    </View>
                    <View style={styles.itemLstInfoNutri}>
                        <FontAwesome name="close" style={styles.itemLstInfoNutriIConRed} />
                        <Text style={styles.itemLstInfoNutriText}>Hipertenso</Text>
                    </View>
                </View>
                <Text style={styles.autor}>By Food Saver</Text>

            </View>
        </View>
    )
}