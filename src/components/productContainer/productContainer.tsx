import { ListRenderItemInfo, Text, View } from "react-native";
import styles from "./productContainer.style";
import React from "react";
import { Product } from "../../state/product/types";

type Props = {
  product: ListRenderItemInfo<Product>
}

const ProductContainer = ({product}: Props) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <Text style={styles.textBox}>
          Product Name : {product.item.name}
        </Text>
        <Text style={styles.textBox}>
          Product Description : {product.item.description}
        </Text>
        <Text style={styles.textBox}>
          Product Price : {product.item.price}
        </Text>
      </View>
    </>
  )
}

export default ProductContainer
