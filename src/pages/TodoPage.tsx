import React, { useState, useEffect } from "react"
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../Interfaces';

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>(JSON.parse(localStorage.getItem('todos') || '[]'))
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(stored)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addNewTodo = (title: string) => {
        const newTodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const togleCompleted = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                return { ...todo }
            }
            return todo
        }))
    }

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <>
            <TodoForm addNewTodo={addNewTodo} />
            <TodoList todos={todos} togleCompleted={togleCompleted} deleteTodo={deleteTodo} />
        </>
    )
}

export default TodoPage