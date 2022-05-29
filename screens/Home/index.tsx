import React from 'react';
import { 
    SafeAreaView,
    Image, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import wateringImg from '../../assets/images/pokebolalogo.png';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

const Home = () => {
    const navigation = useNavigation<propsStack>()
    
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                Bem vindo {'\n'}
                a {'\n'}
                Pokedex
            </Text>
                
            <Image 
                source={wateringImg} 
                style={styles.image} 
                resizeMode="contain"
            />        

            <Text style={styles.subtitle}>                
                Deixe que nos avisaremos o que for necessario para seu pokemon.
            </Text>
            <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                >                
                    <Feather 
                        name="chevron-right" 
                        style={styles.buttonIcon} 
                        onPress={() => navigation.navigate("Search")}
                    />                
                </TouchableOpacity>
        </View>       
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
container: {
    flex: 1, 
    backgroundColor:colors.red       
},
wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
},
title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
},
subtitle: {
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
},
image: {       
    height: Dimensions.get('window').width * 0.7
},
button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,        
},
buttonIcon:{        
    fontSize: 32,
    color: colors.white
}

})
export default Home