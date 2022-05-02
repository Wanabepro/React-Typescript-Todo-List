import React, { useState, useEffect } from "react"
import { ITodo } from './../Interfaces';

interface todoListProps {
    todos: ITodo[]
    togleCompleted(id: number): void
    deleteTodo(id: number): void
}

interface todoProps {
    todo: ITodo
    togleCompleted(id: number): void
    deleteTodo(id: number): void
}


const Todo: React.FC<todoProps> = ({ todo, togleCompleted, deleteTodo }) => {
    const [completed, localToggleCompleted] = useState(todo.completed)
    useEffect(() => {
        if (completed !== todo.completed) togleCompleted(todo.id)
    }, [completed])

    return (
        <li className='todo'>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => localToggleCompleted(!completed)} />
                <span className={todo.completed ? 'title completed' : 'title'}>{todo.title}</span>
                <i className='material-icons bucket' onClick={() => deleteTodo(todo.id)}>delete</i>
            </label>
        </li>
    )
}

const TodoList: React.FC<todoListProps> = ({ todos, togleCompleted, deleteTodo }) => {
    if (todos.length === 0) return <p className="center-align">No objectives now</p>
    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} todo={todo} togleCompleted={togleCompleted} deleteTodo={deleteTodo} />)}

        </ul>
    )
}

export default TodoList