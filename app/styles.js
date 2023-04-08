import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btRender:{
    backgroundColor: '#5CC6BA'
  },
  renderTxtTitulo:{
    paddingTop: 25, 
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#03D069',
    alignSelf: 'center'
  },
  renderTxtDescricao:{
    textAlign: 'center',
    color: '#A0A0A0',
    paddingHorizontal: 25,
    fontSize: 15
  },
  lottie:{
    resizeMode: 'cover',
    width: '100%'
  },
  botao:{
    backgroundColor: '#03D069',
    padding: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 15
  },
  txtBotao:{
    color: '#fff',
    fontSize: 15,
  }
});

export default styles;