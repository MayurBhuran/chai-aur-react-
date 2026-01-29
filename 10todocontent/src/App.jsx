import { useState } from 'react'
import { TodoProvider } from './content'
import './App.css'
import { useEffect } from 'react'
import TodoForm from './components/Todoform'
import { TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addtodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo,isCompleted:false},...prev]);
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((t) => t.id === id ?
     {...t,...todo} : t));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  
  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ?
     {...t,isCompleted:!t.isCompleted} : t));
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if(savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])


  return (
    <TodoProvider value={{todos,addtodo,updateTodo,deleteTodo,
    toggleCompleted}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) =>(
                         <div key={todo.id} className="w-full">
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
