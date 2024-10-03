import { Text, View } from "react-native";

type CalcButtonProps = { buttontext : string, isActive : boolean };

export function CalcButton({buttontext, isActive} : CalcButtonProps) {
    return (
      
      <View style={{ width: 100, height: 100, backgroundColor: isActive ? "blue" : "red" }}>
        <Text>{ buttontext }</Text>
      </View>

    );
  }