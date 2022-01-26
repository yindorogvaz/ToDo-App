import React, {useState} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [title, setTitle] = useState<string>('');

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input type="text" value={title} onKeyPress={keyPressHandler}
                   onChange={handlerChange} id="title" placeholder="write new text"/>
            <label htmlFor="title" className="active">
                write new text
            </label>
        </div>
    )
}