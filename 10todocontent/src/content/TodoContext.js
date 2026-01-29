import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:"Todo msg 1",
      isCompleted:false,
    }
  ],
   addtodo:(todo) => {},
   updateTodo:(id,todo) => {},
   deleteTodo:(id) => {},
   toggleCompleted:(id) => {},
});


export const useTodo = () =>{
   return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;