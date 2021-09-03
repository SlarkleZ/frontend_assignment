import React from 'react';
import type {RootStackParamList} from "./src/navigation/Stack";
import ProductScreen from "./src/screens/Product";
import ProductListScreen from "./src/screens/ProductList";
import UserListScreen from "./src/screens/UserList";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import configureStore from "./src/state";

const store = configureStore();

export type AppDispatch = typeof store.dispatch

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Product" component={ProductScreen} />
          <Tab.Screen name="ProductList" component={ProductListScreen} />
          <Tab.Screen name="UserList" component={UserListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};




export default App;
