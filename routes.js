import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

//1° coisa é importar as screens que quero trabalhar.
import Login from "./src/screens/Login";
import Cliente from "./src/screens/Cliente";
import Home from "./src/screens/Home";
import Produto from "./src/screens/Produto";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export const Routers = () => {
  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
  );
};

export const StackNavigate = () => {
  const [autenticado, setAutenticado] = useState(false);
  const [carregando, setCarregando] = useState(true);

  // Carregar o usuario e o token do asyncStorage toda vez que iniciar o app ou cair na rota de stack
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const usuario = await AsyncStorage.getItem("usuario");
        const token = await AsyncStorage.getItem("token");

        if (!usuario || !token) {
          setAutenticado(false);
          console.log("Autenticado:", false);
        } else {
          setAutenticado(true);
          console.log("Autenticado:", true);
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuario.");
      } finally {
        setCarregando(false); // Finaliza o carregamento.
      }
    };

    setTimeout(carregarDados, 2000);
  }, []);

  if (carregando) {
    // Exibir um loading na tela de exemplo
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Login">
      {!autenticado ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabsNavigate}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={TabsNavigate}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export const TabsNavigate = ({ route }) => {
  const { usuario } = route.params || {};
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ), // Muda a cor conforme o estado da tab />,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
        }}
      >
        {() => <Home usuario={usuario} />}
      </Tab.Screen>

      <Tab.Screen
        name="Cliente"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
          tabBarBadge: 3,
        }}
      >
        {() => <Cliente usuario={usuario} />}
      </Tab.Screen>

      <Tab.Screen
        name="Produto"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="box" size={24} color={color} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
        }}
      >
        {() => <Produto usuario={usuario} />}

      </Tab.Screen>
    </Tab.Navigator>
  );
};

export const DrawerNavigate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "#eee",
          drawerActiveBackgroundColor: "black",
          drawerStyle: {
            backgroundColor: "#1a1a1a",
          },
          drawerIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cliente"
        component={Cliente}
        options={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "#eee",
          drawerActiveBackgroundColor: "black",
          drawerStyle: {
            backgroundColor: "#1a1a1a",
          },
          drawerIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Produto"
        component={Produto}
        options={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "#eee",
          drawerActiveBackgroundColor: "black",
          drawerStyle: {
            backgroundColor: "#1a1a1a",
          },
          drawerIcon: ({ color }) => (
            <Feather name="box" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
