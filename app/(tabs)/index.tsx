import { Image, StyleSheet, Platform, Text, View, SafeAreaView, TextInput, Button, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { CalcButton } from '@/components/CalcButton';





export default function HomeScreen() {

  const [calcresult, setCalcresult] = useState(0);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [errormess, setErrormess] = useState("");

  function docalc(whatToDo : string) {

    const nr1 = parseInt(number1);
    const nr2 = parseInt(number2);
    
    if(isNaN(nr1) ) {
      // number1 is not a number
      setErrormess("Första inte en siffra");
      return;
    }
    if(isNaN(nr2) ) {
      // number2 is not a number
      setErrormess("Andra inte en siffra");
      return;
    }
    setErrormess("");

    if(whatToDo == "plus") {
      setCalcresult(nr1 + nr2);
    }
    if(whatToDo == "minus") {
      setCalcresult(nr1 - nr2);
    }
    if(whatToDo == "multi") {
      setCalcresult(nr1 * nr2);
    }
    
  }


  function calcPlus() {
    docalc("plus");
  }

  function calcMinus() {
    docalc("minus");
  }

  function calcMulti() {
    docalc("multi");
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.bigResultNumber}>{ calcresult }</Text>

        <Text>{ errormess }</Text>

        <TextInput value={number1} onChangeText={setNumber1} style={styles.calcTextfield} />
        <TextInput value={number2} onChangeText={setNumber2} style={styles.calcTextfield} />


        <Pressable onPress={calcPlus}>
          <CalcButton buttontext="PLUS" isActive={ number1.length > 0 } />
        </Pressable>

        <Pressable onPress={calcMinus}>
          <CalcButton buttontext='MINUS' isActive={ number1.length > 0 } />
        </Pressable>

        <Pressable onPress={calcMulti}>
          <CalcButton buttontext='MULTI' isActive={ number1.length > 0 } />
        </Pressable>


      </View>
    </SafeAreaView>
  );


}




const styles = StyleSheet.create({
  calcTextfield: {
    backgroundColor: "cyan"
  },
  bigResultNumber: {
    fontSize: 30
  }
});
