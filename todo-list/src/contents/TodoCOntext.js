import React,{createContext, useContext}  from 'react'



export const TodoContext = createContext({
    todos:[
        {
            id: "a",
            complete: false,
            todo: "Todo msg"
        }
       
    ],
    //Functionality , which'll be define in app.jsx
    addTodo :(todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete:(id)=>{}
    
})

export const useTodo =()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider

