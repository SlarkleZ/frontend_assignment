import styles from "./textInput.style";
import { Text, View, TextInput } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  onChangeEvent : Dispatch<SetStateAction<string>>,
  label: string,
  value: string,
}

const TextInputCustom = (props: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <Text>{props.label}</Text>
      <TextInput
        onChangeText={props.onChangeEvent}
        value={props.value}
        style={styles.textInput}
      />
    </View>
  )
}

export default TextInputCustom
