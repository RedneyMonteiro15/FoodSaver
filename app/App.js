import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/SignIn';
import Register from './src/Register';
import EsquceuSenha from './src/EsqueceuSenha';
import VerificarCodigo from './src/VerificarCodigo';
import SplashScreen from './src/SplashScreen';
import Navigation from './src/Navigation';

const slider = [
  {
    key: 1,
    titulo: 'Primeiro',
    descricao:  'descricao',
    imagem: require('./assets/sliders/slider1.json')
  },
  {
    key: 2,
    titulo: 'Primeiro',
    descricao:  'descricao',
    imagem: require('./assets/sliders/slider2.json')
  },
  {
    key: 3,
    titulo: 'Primeiro',
    descricao:  'descricao',
    imagem: require('./assets/sliders/slider3.json')
  },
  {
    key: 4,
    titulo: 'Primeiro',
    descricao:  'descricao',
    imagem: require('./assets/sliders/slider4.json')
  },
];  

export default function App() {

  const [showHome, setShowHome] = useState(false);

  const Stack = createNativeStackNavigator();

  function renderSlider({item}){
    return(
      <View style={styles.container}>
        <LottieView 
          source={item.imagem}
          autoPlay={true}
          loop={true}
          style={styles.lottie}/>
        <Text style={styles.renderTxtTitulo}>{item.titulo}</Text>
        <Text style={styles.renderTxtDescricao}>{item.descricao}</Text>
      </View>
    )
  }

  const done = () => {
    setShowHome(true);
  }

  if(showHome){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
          <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
          <Stack.Screen name='EsqueceuSenha' component={EsquceuSenha} options={{headerShown: false}}/>
          <Stack.Screen name='VerificarCodigo' component={VerificarCodigo} options={{headerShown: false}}/>
          <Stack.Screen name='Navigation' component={Navigation} options={{headerShown: false, gestureDirection: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else{
    return (
        <AppIntroSlider 
        renderItem={renderSlider}
        data={slider}
        activeDotStyle={{
          backgroundColor: '#03D069',
          width: 30
        }}
        renderNextButton={() => <View style={styles.botao}><Text style={styles.txtBotao}>Proximo</Text></View>}
        renderDoneButton={() => <View style={styles.botao}><Text style={styles.txtBotao}>Aceder</Text></View>}
        onDone={done}
        />
    );
  }
}

