import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import TodoItem from './TodoItem';
import { Todo } from '../hooks/useTodos';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  list: {
    flex: 1,
  },
});

export default function TodoList({
  todos,
  onToggle,
  onUpdate,
  onDelete,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks yet. Add one to get started!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}