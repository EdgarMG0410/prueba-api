import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    useEffect(() =>{
        getTodos()
    }, [])
    
    const getTodos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const info = await data.json()
        setTodos(info)
    }
    return (
        <div className="Todos">
        {
            todos.map(item =>(
                <TodoItem
                    key={item.id}
                    { ...item }
                    />
            ))
        }
        </div>
    )
}