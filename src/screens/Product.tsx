import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import {Product} from "../state/product/types";
import { RootStackParamList } from "../navigation/Stack";
import {addProduct,deleteProduct} from "../state/product/actions";
import { getProductState, getUserState } from "../state/selectors";
import styles from "../styles/productStyle"
import uuid from 'react-native-uuid'; //for generate unique id
import Button from '../components/button/button'
import TextInputCustom from "../components/textInput/textInput";

type ProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Product'
  >;

type navigationProps = {
  navigation: ProductScreenNavigationProp;
};

function ProductScreen({ navigation }: navigationProps) {

  const [name, onChangeName] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [price, onChangePrice] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const [list, setList] = React.useState<Product[]>([]);

  const dispatch = useDispatch()
  const products = useSelector(getProductState)
  const users = useSelector(getUserState)

  useEffect(()=>{
    console.log(products)
  },[products])

  const validateData = async() => {
    if(name !== "" && description !== "" && price !== ""){
      addToArray()
    } else {
      console.log("no validated!")
    }
  }


  const addToArray = async() => {
    let id = uuid.v4() //generate unique id
    const newData = {
      id: id.toString(),
      name: name,
      description: description,
      price: price
    }
    await dispatch(addProduct(newData))
  }


  const clearList = async() => {
    await dispatch(deleteProduct(0))
  }

  return (
    <SafeAreaView style={styles.container}>

      <TextInputCustom
        onChangeEvent={onChangeName}
        label={"Product Name"}
        value={name}
      />
      <TextInputCustom
        onChangeEvent={onChangeDescription}
        label={"Product Description"}
        value={description}
      />
      <TextInputCustom
        onChangeEvent={onChangePrice}
        label={"Product Price"}
        value={price}
      />

      <Button
        onPress={validateData}
        buttonText={"Submit"}
      />

    </SafeAreaView>
  );
}

export default ProductScreen;
