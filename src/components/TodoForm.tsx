import React, { useState } from "react";

interface todoFormProps {
    addNewTodo(title: string): void
}

const TodoForm: React.FC<todoFormProps> = props => {
    const [title, setTitle] = useState<string>('')

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.addNewTodo(title)
            setTitle('')
        }
    }
    return (
        <div className="inputField">
            <input type="text" id="title" placeholder="Enter objective" value={title} onChange={titleChangeHandler} onKeyPress={keyPressHandler} />
            <label htmlFor="title" className="active">Title</label>
        </div>
    )
}

export default TodoForm