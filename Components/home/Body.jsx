import {ScrollView, StyleSheet, View} from "react-native";
import {Card} from "./card/Card";

export const Body = ({todosList, setCompleted, deleteTodo}) => {
  const renderTodos = list =>{
    return list.map(todo => <Card key={todo.id} todo={todo} onPress={setCompleted} onLongPress={deleteTodo}/>)
  }

  return (
    <View style={s.container}>
      <ScrollView>
        {renderTodos(todosList)}
      </ScrollView>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    backgroundColor:"#ececec"
  }
})