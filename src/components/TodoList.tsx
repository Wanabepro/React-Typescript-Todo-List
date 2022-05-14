import React, { useState } from "react"
import { ITodo } from './../Interfaces';

interface todoListProps {
    todos: ITodo[]
    togleCompleted(id: number): void
    deleteTodo(id: number): void
    changeOrder(id: number, draggingTodo: ITodo): void
}

interface todoProps {
    todo: ITodo
    togleCompleted(id: number): void
    deleteTodo(id: number): void
    changeOrder(id: number, draggingTodo: ITodo): void
}

interface dragHandlerProps {
    event: React.DragEvent
    todo?: ITodo
}

let draggingTodo: ITodo



const Todo: React.FC<todoProps> = ({ todo, togleCompleted, deleteTodo, changeOrder }) => {
    const dragStartHandler = (event: React.MouseEvent, todo: ITodo) => {
        draggingTodo = todo
    }

    const dragLeaveHandler = (event: React.DragEvent<HTMLLIElement>) => {
        (event.target as HTMLElement).style.background = 'white'
    }
        
    const dragOverHandler = (event: React.DragEvent<HTMLLIElement>) => {
        (event.target as HTMLElement).style.background = 'lightgray'
        event.preventDefault()
    }

    const dropHandler = (event: React.DragEvent<HTMLLIElement>, todo: ITodo) => {
        (event.target as HTMLElement).style.background = 'white'
        event.preventDefault()
        changeOrder(todo.id, draggingTodo)
    }

    return (
        <li className='todo'
            draggable={true}
            onDragStart={event => dragStartHandler(event, todo)}
            onDragLeave={event => dragLeaveHandler(event)}
            onDragOver={event => dragOverHandler(event)}
            onDrop={event => dropHandler(event, todo)}
            
        >
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => togleCompleted(todo.id)} />
                <span className={todo.completed ? 'title completed' : 'title'}>{todo.title}</span>
                <i className='material-icons bucket' onClick={() => deleteTodo(todo.id)}>delete</i>
            </label>
        </li>
    )
}

const TodoList: React.FC<todoListProps> = ({ todos, togleCompleted, deleteTodo, changeOrder }) => {
    if (todos.length === 0) return <p className="center-align">No objectives now</p>

    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} todo={todo} togleCompleted={togleCompleted} deleteTodo={deleteTodo} changeOrder={changeOrder} />)}

        </ul>
    )
}

export default TodoList