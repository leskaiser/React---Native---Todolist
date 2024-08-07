import {Image, StyleSheet, Text, View} from "react-native";
import logo from "../../assets/logo-todo.png"

export const Header = () => {
  return (
    <View style={s.container}>
      <Image style={s.logo} source={logo} resizeMode={"contain"}/>
      <Text style={s.subtitle}>You have somethings to do !</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#252a2f",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    height: "80%",
    width:"30%"
  },
  subtitle: {
    // fontFamily: "poppins, arial, sans-serif",
    fontSize: 17,
    color: "#ececec",
  }
})
