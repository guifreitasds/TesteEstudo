import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { CoroaImgText } from '../components/CoroaImgText/CoroaImgText';
import { TextAndSubText } from '../components/TextAndSubText/TextAndSubText';
import { ButtonOpt } from '../components/ButtonOpt/ButtonOpt'

export function HomeScreen({ navigation }) {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CoroaImgText></CoroaImgText>
      </View>
      <View style={styles.containerTextMain}>
        <TextAndSubText text='Vamos começar a usar o ' textSpan='C.O.R.O.A!' subText='O que você gostaria de fazer por aqui?'/>
      </View>
      <View style={styles.optionsButtons}>
        <ButtonOpt source={require('../assets/pills.png')} title='Agendar meus Remédios' 
          func={()=>{
              navigation.navigate('Medicines')
            }
          }/>
        <ButtonOpt source={require('../assets/doctor.png')} title='Cadastrar meu cuidador'
            func={()=>{
              navigation.navigate('Profile')
            }
          }/>
        <ButtonOpt source={require('../assets/file.png')} title='Abrir relatório diário'/>
        <ButtonOpt source={require('../assets/letter.png')} title='Chat com Cuidador'
          func={()=>{
            navigation.navigate('Profile');
          }}
          />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    textAlign: 'center',
    backgroundColor: '#FFC9AB'
  },
  header:{
    justifyContent: 'center',
    alignItems:'center',
    
  },
  containerTextMain:{
    alignItems: 'center',
    marginTop: '5%',
  },
  optionsButtons: {
    alignItems: 'center',
    marginBottom: '5%'
  }
})