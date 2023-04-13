import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Alert, FlatList, TouchableWithoutFeedback} from 'react-native';

import styles from '../styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const INGREDIENTES = [
    { id: 1, nome: 'Arroz', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 2, nome: 'Feijão', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 3, nome: 'Cebola', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 4, nome: 'Alho', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 5, nome: 'Tomate', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 6, nome: 'Pimentão', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 7, nome: 'Massa', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 8, nome: 'Acuçar', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 9, nome: 'Manteiga', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 10, nome: 'Farinha', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 11, nome: 'Leite', imagem: require('../../../../assets/ingredientes/arroz.png') },
    { id: 12, nome: 'Pimentão', imagem: require('../../../../assets/ingredientes/arroz.png') },
    
  ];

export default function Inicio(){

    const navigation = useNavigation();
    

    const [showModal, setShowModel] = useState(false);
    const [idIngrediente, setIDIngrediente] = useState(0);
    const [nomeIngrediente, setNomeIngrediente] = useState('');
    const [quantIngrediente, setQuantIngrediente] = useState(0);
    const [quantMax, setQuantMax] = useState(0);

    const openModal = (id, nome) => {
        setShowModel(true);
        setIDIngrediente(id);
        setNomeIngrediente(nome);
        setQuantMax(10);
    }

    const closeModal = () => {
        setShowModel(false);
        setIDIngrediente(0);
        setNomeIngrediente('');
        quantIngrediente(0);
        quantMax(8);
    }

    const aumemtarIngrediente = () => {
        if(quantMax > quantIngrediente){
            setQuantIngrediente(quantIngrediente+1);
        }
    }   
    
    const diminuirIngrediente = () => {
        if(quantIngrediente > 0){
            setQuantIngrediente(quantIngrediente-1);
        }
    }

    const renderIngredientes = ({item}) => (
        <TouchableOpacity style={styles.card} onPress={() => openModal(item.id, item.nome)}>
            <View style={styles.cardImg}>
                <Image 
                source={item.imagem} 
                style={styles.imgCard}/>
            </View>
            <Text style={styles.cardTxt}>{item.nome}</Text>
        </TouchableOpacity>
    );

    return(
        

        <View style={styles.container}>
            <Text style={styles.titulo}>Escolhe seus ingredientes</Text>
            <FlatList 
                data={INGREDIENTES}
                renderItem={renderIngredientes}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                style={styles.box}
            />
            <TouchableOpacity style={styles.btPesqReceita} onPress={() => navigation.navigate('ListReceitas')}>
                <Text style={styles.txtPesqReceita}>Pesquisar Receita</Text>
            </TouchableOpacity>

            {/* Modal para modificar as quantidades*/}
            <Modal animationType="slide"
                animationInTiming={500}
                animationOutTiming={500}
                visible={showModal}
                transparent={true}>
                    <TouchableWithoutFeedback onPress={() => {closeModal()}}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modal}>
                                <Text style={styles.modalTitulo}>Quantos {nomeIngrediente.toLowerCase()} têm?</Text>
                                <Text style={styles.modalQuant}>Quantidades</Text>
                                <View style={styles.modalView}>
                                    <TouchableOpacity style={[styles.modalViewButton, quantIngrediente === 0 ? styles.modalViewMudado : styles.modalViewNormal]}
                                        onPress={diminuirIngrediente}>
                                        <Text style={styles.modalViewText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.modalViewQuant}>{quantIngrediente}</Text>
                                    <TouchableOpacity style={[styles.modalViewButton, quantIngrediente === quantMax ? styles.modalViewMudado: styles.modalViewNormal]}
                                        onPress={aumemtarIngrediente}>
                                        <Text style={styles.modalViewText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
            </Modal>
            {/*Modal para mostrar a receita */}
            <Modal
                visible={false}>
                    
            </Modal>
        </View>


    )
}
