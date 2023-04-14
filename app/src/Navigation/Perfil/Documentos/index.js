import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, FlatList} from 'react-native';
import styles from '../styles';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DOCUMENTOS = [
    {id: 1, dataInicio: '02/04/2023', dataFim: '02/04/2023'},
    {id: 2, dataInicio: '02/04/2023', dataFim: '02/04/2023'},
    {id: 3, dataInicio: '02/04/2023', dataFim: '02/04/2023'},
]

export default function Documentos(){
    const navigation = useNavigation();

    const renderDocumentos = ({item}) => (
        <View style={styles.renderDocumento}>
            <Text style={styles.renderDocumentoTitulo}>Relatorio Semanal</Text>
            <View style={styles.renderDocumentoDatas}>
                <View style={styles.renderDocumentoData}>
                    <MaterialIcons name="date-range" style={styles.renderDocumentoDataIcon} />
                    <Text style={styles.renderDocumentoDataText}>{item.dataInicio}</Text>
                </View>
                <View style={styles.renderDocumentoData}>
                    <MaterialIcons name="date-range" style={styles.renderDocumentoDataIcon} />
                    <Text style={styles.renderDocumentoDataText}>{item.dataFim}</Text>
                </View>
            </View>
            <View style={styles.renderDocumentoButttons}>
                <TouchableOpacity style={styles.renderDocumentoButtton}>
                    <Text style={styles.renderDocumentoButttonText}>Imprimir PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.renderDocumentoButtton}>
                    <Text style={styles.renderDocumentoButttonText}>Partilhar PDF</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
 
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <Entypo name="arrow-long-left" style={styles.headerIcon}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Meus Documentos</Text>
            </View>
            <FlatList 
                data={DOCUMENTOS}
                renderItem={renderDocumentos}
                contentContainerStyle={{alignItems: 'center'}}
                />
        </View>
    )
}