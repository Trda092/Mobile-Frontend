import React from 'react'
import InterestBadge from '../components/InterestBadge'
import { NativeBaseProvider,ScrollView,Text } from 'native-base'
import { View,StyleSheet } from 'react-native'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';


export default function InterestSelectScreen() {
  const [fontsLoaded] = useFonts({
    Ribeye_400Regular,
  });
  const interestName = ["basketball", "football", "ai", "pressing", "newcomer", "detective", "invest"]
  return (
    <NativeBaseProvider>
      <ScrollView>
      <View style={styles.textIcon}>
            <Text fontSize="3xl" style={[{marginRight:"35%", fontFamily:'Ribeye_400Regular'}]}>What's your</Text>
            <Text fontSize="3xl" style={[{marginLeft:"15%", fontFamily:'Ribeye_400Regular'}]}>interest topic</Text>
          </View>
      <View style={styles.BtnSelection}>
     {interestName.map((name,index)=>{
      return <InterestBadge key={index} idx={index} text={name}/>
     })}
      </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  textIcon:{
    textAlign:'center',
    marginTop:"15%",
  },
  BtnSelection:{
    flexDirection:"row", 
    justifyContent:'center',
    flexWrap:'wrap',
    marginTop:"10%",
    // maxHeight:"50%"
  }
});
