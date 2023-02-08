import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: "todoApp",
    initialState: { todos: [] },

    reducers: {
        sliceAddHandler: (state, action) => {
            state.todos = [...state.todos, action.payload]
            // console.log("value of todos",state.todos);
        },
        sliceClearHandler: (state) => {
            state.todos = []

        },
        sliceDeleteHandler: (state, action) => {
            console.log("delete handler is clicked");
            const todos = state.todos
            let filteredTodos = todos.filter((todo) => {
                console.log("filter todo==>", todo);
                if (todo.description != action.payload.description) {
                    return todo
                }
            })

            state.todos = filteredTodos
        },
        sliceUpdateHandler: (state, action) => {
            //  state.todos=action.payload   
            // console.log("action.paylload.item", action.payload.updateText.description)
            let updatedValue = action.payload.updateItem
            console.log("updated vlaue is", updatedValue);
            let updateText = state.todos.map((item) => {
                if (action.payload.item.description == item.description) {
                    return updatedValue
                }
                else {
                    return item
                }
            })
            state.todos = updateText
        }
    }
})

export const { sliceAddHandler, sliceClearHandler, sliceDeleteHandler, sliceUpdateHandler } = todoSlice.actions
export default todoSlice.reducer
