import {Platform, Pressable, StyleSheet, Text, View} from "react-native";


export const Footer = ({tab, onPressed, countData}) => {
  return (

    <View style={[s.container]}>
      <Pressable style={s.press} onPress={() => onPressed("all")}>
        <Text style={tab === "all" ? s.buttonActive : s.button}>All ({countData.all})</Text>
      </Pressable>
      <Pressable style={s.press} onPress={() => onPressed("inProgress")}>
        <Text style={tab === "inProgress" ? s.buttonActive : s.button}>In Progress ({countData.inProgress})</Text>
      </Pressable>
      <Pressable style={s.press} onPress={() => onPressed("done")}>
        <Text style={tab === "done" ? s.buttonActive : s.button}>Done ({countData.done})</Text>
      </Pressable>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    ...Platform.select({
      android: {
        elevation: 8,
      },
      default: {
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)',
      },
    }),
  },
  press: {
    paddingHorizontal: "5%",
    paddingVertical: "3%",
  },
  button: {
    // fontFamily: "poppins",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonActive: {
    // fontFamily: "poppins",
    fontWeight: "600",
    fontSize: 16,
    color: "#2f75e4"
  }
})