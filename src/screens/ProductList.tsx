import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RootStackParamList } from "../navigation/Stack";
import { useSelector } from "react-redux";
import { getProductState } from "../state/selectors";
import styles from "../styles/productListStyle"
import { Product } from "../state/product/types";
import ProductContainer from "../components/productContainer/productContainer";

type ProductListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductList'
  >;

type Props = {
  navigation: ProductListScreenNavigationProp;
};

function ProductListScreen({ navigation }: Props) {

  const products = useSelector(getProductState)
  console.log(products)

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          renderItem={(product: ListRenderItemInfo<Product>)=> (
            <ProductContainer product={product}/>
          )}
          keyExtractor={item => item.id}
        />

    </SafeAreaView>
  );
}

export default ProductListScreen;
