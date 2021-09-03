import styles from "./button.style";
import { Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  onPress: () => any,
  buttonText: string | null
}

const Button = (props: Props) => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </>
  )
}

export default Button;
