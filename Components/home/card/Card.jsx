import {Image, Platform, Pressable, StyleSheet, Text} from "react-native";
import logo from "../../../assets/check-squared.png";


export const Card = ({todo, onPress, onLongPress}) => {
  return (
    <Pressable style={[s.card]} onPress={() => onPress(todo.id)} onLongPress={() => onLongPress(todo.id)}>
      <Text style={[s.title, todo.isCompleted && s.strikethrough]}>{todo.title}</Text>
      {todo.isCompleted && <Image style={s.logo} source={logo}/>}
    </Pressable>
  )
}

const s = StyleSheet.create({
  card: {
    flex: 1,
    width: "auto",
    minHeight: 90,
    maxHeight: 90,
    margin: 7,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      default: {
        boxShadow: '7px 3px 7px rgba(0, 0, 0, 0.1)',
      }
    }),
  },
  logo: {
    height: 20,
    width: 20,
  },
  title: {
    // fontFamily: "poppins",
    fontSize: 16,
    fontWeight: "500",
    // width: "80%"
  },
  strikethrough: {
    ...Platform.select({
      ios: {
        textDecoration: 'line-through',
      },
      default: {
        textDecorationLine: 'line-through',
      },
    }),
  },
})

