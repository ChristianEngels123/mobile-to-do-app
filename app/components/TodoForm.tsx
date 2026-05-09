import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    justifyContent: 'center',
  },
});

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleAdd}
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={handleAdd}
        disabled={!title.trim()}
      >
        Add
      </Button>
    </View>
  );
}