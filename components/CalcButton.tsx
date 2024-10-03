import { Text, View } from "react-native";

type CalcButtonProps = { buttontext : string, isActive : boolean };

export function CalcButton({buttontext, isActive} : CalcButtonProps) {
    return (
      
      <View style={{ flex: 1, margin: 20, backgroundColor: isActive ? "blue" : "red" }}>
        <Text style={{ color: isActive ? "white" : "black" }}>{ buttontext }</Text>
      </View>

    );
  }