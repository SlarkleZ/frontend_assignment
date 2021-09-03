import { Image, ListRenderItemInfo, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { User } from "../../state/user/types";
import Button from "../button/button";
import styles from "./userContainer.style"

type Props = {
  user: ListRenderItemInfo<User>,
  changeActivate: (user: ListRenderItemInfo<User>) => void
}

const UserContainer = ({user,changeActivate}: Props) => {
  return (
    <>
      <View style={[styles.itemContainer, user.item.isActivate? styles.activateTrue: styles.activateFalse]}>
        <View style={styles.textContainer}>
          <Text style={styles.textBox}>
            User : {user.item.title}. {user.item.firstName} {user.item.lastName}
          </Text>
          <Text style={styles.textBox}>
            Email : {user.item.email}
          </Text>
        </View>

        <View style={{flex:1, flexDirection:"row-reverse",justifyContent: "space-between", alignItems: "center",paddingHorizontal: 10}}>
          <Image
            style={styles.userImg}
            source={{uri: user.item.picture}}
          />
          <Button
            onPress={() => changeActivate(user)}
            buttonText={user.item.isActivate? "Deactivate":"Activate" }
          />
        </View>
      </View>
    </>
  )
}

export default UserContainer
