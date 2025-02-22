import {Alert, StyleSheet} from "react-native";
import {Header} from "../home/Header";
import {Body} from "../home/Body";
import {Footer} from "../home/Footer";
import {useState} from "react";
import {todos} from "../data/data";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AddTodo} from "../home/AddTodo";
import Dialog from "react-native-dialog";

export const Template = callbackfn => {
  const [todosList, setTodoList] = useState(todos);
  const [selectedTab, setSelectedTab] = useState("all");
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("")

  const toggleTab = (tabName) => setSelectedTab(tabName)
  const updateTodo = (id) => {
    let newTodoList = [...todosList];
    newTodoList[todosList.findIndex(todo => todo.id === id)].isCompleted = !newTodoList[todosList.findIndex(todo => todo.id === id)].isCompleted;
    setTodoList(newTodoList)
  };
  const deleteTodo = (id) => {
    Alert.alert("Delete", "Delete this task ?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodoList(state => state.filter(todo => todo.id !== id))
        }
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ])
  }

  const saveTodo = () => {
    setTodoList(state => {
      const newTask = {id: state[state.length - 1].id + 1, title: inputValue, isCompleted: false};
      showDialog();
      return [...state, newTask];
    })
  }

  const showDialog = () => setAddDialogVisible(!addDialogVisible);

  const countUpdate = todosList.reduce((acc, todo) => {
    todo.isCompleted ? ++acc.done : ++acc.inProgress;
    return acc;
  }, {all: todosList.length, inProgress: 0, done: 0})
  const getFilteredTodo = () => {
    switch (selectedTab) {
      case "all":
        return todosList;
      case "inProgress":
        return todosList.filter(todo => !todo.isCompleted);
      case "done":
        return todosList.filter(todo => todo.isCompleted);
    }
  };

  return (
    <>
      <SafeAreaProvider style={style.topBar}>
        <SafeAreaView style={style.container}>
          <Header/>
          <Body todosList={getFilteredTodo()} setCompleted={updateTodo} deleteTodo={deleteTodo}/>
          <AddTodo toggleDialog={showDialog}/>
        </SafeAreaView>
        <Footer tab={selectedTab} onPressed={toggleTab} countData={countUpdate}/>
      </SafeAreaProvider>
      <Dialog.Container visible={addDialogVisible} onBackdropPress={() => setAddDialogVisible(!addDialogVisible)}>
        <Dialog.Title>Create Task</Dialog.Title>
        <Dialog.Description>Choose a name for new task</Dialog.Description>
        <Dialog.Input onChangeText={(text) => setInputValue(text)}/>
        <Dialog.Button label={"Save"} onPress={() => saveTodo()} disabled={inputValue.trim().length === 0}/>
      </Dialog.Container>
    </>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252a2f"
  },
  topBar: {
    flex: 1,
    backgroundColor: "#252a2f",
  }
})


