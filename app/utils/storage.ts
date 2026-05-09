import AsyncStorage from 'expo-async-storage/web';
import { Todo } from '../hooks/useTodos';

const TODOS_KEY = '@mobile_todo_app/todos';

export async function saveTodos(todos: Todo[]): Promise<void> {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem(TODOS_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving todos:', error);
  }
}

export async function loadTodos(): Promise<Todo[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(TODOS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
}

export async function clearTodos(): Promise<void> {
  try {
    await AsyncStorage.removeItem(TODOS_KEY);
  } catch (error) {
    console.error('Error clearing todos:', error);
  }
}