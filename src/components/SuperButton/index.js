import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SuperButton = (props) => {

  return (
    <View>
      <TouchableOpacity
        style={
          props.primary ? style.buttonPrimary : style.buttonOutlined
        }
        onPress={props.onPress}
      >
        <Text
          style={props.primary ? style.valuePrimary : style.valueOutlined}
        >
          {props.value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//~51.0.28
/*
    "expo": "~52.0.28",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.5",
    "react-native-web": "~0.19.10",
    "react-dom": "18.2.0",
    "@expo/metro-runtime": "~3.2.3"
*/

const style = StyleSheet.create({
  buttonPrimary: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 8,
    width: 320,
    borderRadius: 4,
    marginTop: 5,
  },
  valuePrimary: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonOutlined: {
    alignItems: "center",
    backgroundColor: "fff",
    padding: 8,
    width: 320,
    borderRadius: 4,
    marginTop: 5,
    borderWidth: 1,              // Espessura da borda
    borderColor: 'orange'
  },
  valueOutlined: {
    color: "orange",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default SuperButton;
