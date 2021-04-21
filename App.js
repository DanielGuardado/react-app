import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "./app/components/Button";
import ListingEditScreen from './app/screens/ListingEditScreen'
import salesOrderApi from "./app/api/salesorder"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'



export default function App() {

  const Stack = createStackNavigator();
  const StackNavigator = () => {
    <Stack.Navigator>
      <Stack.Screen />
      <Stack.Screen name=""/>
    </Stack.Navigator>
  }
  
  const [salesOrder, setSalesOrder] = useState([]);
  let x

  useEffect(() => {
    loadSalesOrder()
  }, [])


  const loadSalesOrder = async () => {
    const response = await salesOrderApi.getSalesOrder();
    let arr = []
    response.data.data.forEach(ele => arr.push(ele.order_id))
    setSalesOrder(arr)
  }
  // console.log(salesOrder)
  x = salesOrder
  // let body = {order_id: salesOrder}

  // console.log(x)
  return (
    <View style={styles.container}>
      <Button title="New Pick" onPress={() => {
        // console.log(x)
        salesOrderApi.createPick(salesOrder)
      }}/>

    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
