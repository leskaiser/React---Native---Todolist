import {Platform, Pressable, StyleSheet, Text} from "react-native";

export const AddTodo = () => {
  return (
    <Pressable style={s.btn}>
      <Text style={s.plus}>+</Text><Text style={s.btnText}> Add Todo</Text>
    </Pressable>
  )
}


const s = StyleSheet.create({
  btn: {
    position: "absolute",
    bottom: 50,
    right: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "rgb(172,205,255)",
    borderRadius: 7,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        boxShadow: '7px 3px 7px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  btnText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0d63ea"
  },
  plus: {
    fontSize: 30,
    fontWeight: "700",
    marginRight: 5,
    color: "#0d63ea"
  }
})