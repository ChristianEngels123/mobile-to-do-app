import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Checkbox, IconButton, TextInput, Button } from 'react-native-paper';
import { Todo } from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  deleteButton: {
    marginLeft: 8,
  },
  editMode: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  editInput: {
    flex: 1,
  },
});

export default function TodoItem({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, editTitle);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <Card style={styles.card}>
        <View style={styles.editMode}>
          <TextInput
            style={styles.editInput}
            value={editTitle}
            onChangeText={setEditTitle}
            autoFocus
          />
          <Button onPress={handleSave} mode="text">
            Save
          </Button>
          <Button onPress={handleCancel} mode="text">
            Cancel
          </Button>
        </View>
      </Card>
    );
  }

  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <Checkbox
          style={styles.checkbox}
          status={todo.completed ? 'checked' : 'unchecked'}
          onPress={() => onToggle(todo.id)}
        />
        <TextInput
          style={styles.textInput}
          value={todo.title}
          editable={false}
        />
        <IconButton
          icon="pencil"
          onPress={() => setIsEditing(true)}
        />
        <IconButton
          style={styles.deleteButton}
          icon="delete"
          iconColor="red"
          onPress={() => onDelete(todo.id)}
        />
      </View>
    </Card>
  );
}