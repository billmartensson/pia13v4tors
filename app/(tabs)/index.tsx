import { Image, StyleSheet, Platform, Text, View, SafeAreaView, TextInput, Button, Pressable, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { CalcButton } from '@/components/CalcButton';





export default function HomeScreen() {

  const [calcresult, setCalcresult] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [errormess, setErrormess] = useState("");

  const [calcHistory, setCalcHistory] = useState([""]);

  function docalc(whatToDo: string) {

    const nr1 = parseInt(number1);
    const nr2 = parseInt(number2);

    if (isNaN(nr1)) {
      // number1 is not a number
      setErrormess("Första inte en siffra");
      return;
    }
    if (isNaN(nr2)) {
      // number2 is not a number
      setErrormess("Andra inte en siffra");
      return;
    }
    setErrormess("");

    if (whatToDo == "plus") {
      const resulttext = `${number1} + ${number2} = ${nr1 + nr2}`;
      setCalcresult(resulttext);
      setCalcHistory([...calcHistory, resulttext]);
    }
    if (whatToDo == "minus") {
      const resulttext = `${number1} - ${number2} = ${nr1 - nr2}`;
      setCalcresult(resulttext);
      setCalcHistory([...calcHistory, resulttext]);
    }
    if (whatToDo == "multi") {
      const resulttext = `${number1} * ${number2} = ${nr1 * nr2}`;
      setCalcresult(resulttext);
      setCalcHistory([...calcHistory, resulttext]);
    }

    setNumber1("");
    setNumber2("");
    

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

  function doReset() {
    setCalcresult("");
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.bigResultNumber}>{calcresult}</Text>

        <Text>{errormess}</Text>

        <TextInput value={number1} onChangeText={setNumber1} style={styles.calcTextfield} />
        <TextInput value={number2} onChangeText={setNumber2} style={styles.calcTextfield} />

        <View style={{ flexDirection: "row" }}>
          <Pressable style={{ flex: 1, aspectRatio: 1 }} onPress={calcPlus}>
            {({ pressed }) => (
              <CalcButton buttontext="PLUS" isActive={pressed} />
            )}
          </Pressable>

          <Pressable style={{ flex: 1, aspectRatio: 1 }} onPress={calcMinus}>
            {({ pressed }) => (
              <CalcButton buttontext="MINUS" isActive={pressed} />
            )}
          </Pressable>

          <Pressable style={{ flex: 1, aspectRatio: 1 }} onPress={calcMulti}>
            {({ pressed }) => (
              <CalcButton buttontext="MULTI" isActive={pressed} />
            )}
          </Pressable>
        </View>

        <Pressable onLongPress={doReset}>
          <Text>RESET</Text>
        </Pressable>

        <FlatList data={calcHistory} renderItem={(raden) => <Text>{ raden.item }</Text>} />


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
