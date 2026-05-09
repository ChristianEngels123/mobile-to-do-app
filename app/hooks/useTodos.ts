import { useState, useEffect } from 'react';
import { loadTodos, saveTodos } from '../utils/storage';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initializeTodos = async () => {
      const savedTodos = await loadTodos();
      setTodos(savedTodos);
      setIsLoaded(true);
    };

    initializeTodos();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveTodos(todos);
    }
  }, [todos, isLoaded]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, updateTodo, deleteTodo, toggleTodo };
}