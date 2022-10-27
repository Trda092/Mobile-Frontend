import React, { useState } from 'react'
import { NativeBaseProvider, Button, Pressable, Text} from 'native-base'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';
export default function InterestBadge(props) {
    const [fontsLoaded] = useFonts({
        Ribeye_400Regular,
      });
    const [select, setSelect] = React.useState(false)
    // const [index, setIndex] = React.useState(props.idx)
    return (
            <Button colorScheme="white"_hover={{bg:'#F4EFED'}} onPress={()=>{
                setSelect(!select)
            }} _focus={{bg:select?"#b4948d":"white"}} borderRadius="full" width="25%" mx="3" my="2" borderWidth="2" _text={{fontSize:"sm", color:'black', fontFamily:"Ribeye_400Regular"}}  style={styles.BtnStyle}>
                {props.text}
            </Button>
    )
}
const styles = StyleSheet.create({
    BtnStyle:{
        borderColor:"#9D746B",
    }
})