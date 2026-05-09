import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#6200ee',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default function App() {
  const { todos, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      </PaperProvider>
    );
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My To-Do List</Text>
          </View>
          <View style={styles.contentContainer}>
            <TodoForm onAdd={addTodo} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}