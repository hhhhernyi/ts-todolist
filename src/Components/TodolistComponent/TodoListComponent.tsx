import { useState } from "react"

const TodoListComponent = () => {
    const [tasks, setTasks] = useState([])
    const [formData, setFormData] = useState('')
    function handleClickAddTask() {
        console.log('add task')
    }
    function handleSubmit(event) {
        event.preventDefault()
    }
    function handleChange(event) {
        console.log(event.target.value)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter Task" onChange={handleChange}></input>
        <button  onClick={handleClickAddTask}>Add task</button>
        </form>
        
    </div>
  )
}

export default TodoListComponent