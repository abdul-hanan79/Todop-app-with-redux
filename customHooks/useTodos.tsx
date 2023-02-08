import { useState } from 'react'
import { TodoType } from '../types/todoType'
import { useSelector, useDispatch } from "react-redux"
import { sliceAddHandler, sliceClearHandler, sliceDeleteHandler, sliceUpdateHandler } from '../store/todoSlice'

const useTodos = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state: any) => state.todoSlice.todos)
    console.log("data from useSelector", todoList);
    const [inputText, setInputText] = useState<string>('')
    // const [todoList, setTodoList] = useState<TodoType[]>([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [oldItem, setOldItem] = useState({})
    const [itemDescription, setItemDesciption] = useState("")
    const [itemEditInput, setitemEditInput] = useState("")
    const addHandler = () => {
        if (inputText != "") {
            let newTodoList: TodoType = {
                description: inputText
            }
            dispatch(sliceAddHandler(newTodoList))
            // setTodoList([...todoList, newTodoList])
            setInputText('')
            // console.log("todolist is=================>", todoList);
        }
        else {
            alert("item cannot be empty")
        }
    }
    const clearAllHandler = () => {
        dispatch(sliceClearHandler())
        // setTodoList([])
    }
    const deleteHandler = (item: TodoType) => {
        console.log("item deleted", item)
        // let filteredTodos = todoList.filter((todo) => {
        //     console.log("filter todo==>", todo);
        //     if (todo.description != item.description) {
        //         return todo
        //     }
        // })

        // setTodoList(filteredTodos)
        dispatch(sliceDeleteHandler(item))
        console.log("updated value of todolist is", todoList);

    }
    const editHandler = (item: TodoType) => {
        setItemDesciption(item.description)
        setitemEditInput(item.description)
        setIsUpdate(true)
        setOldItem(item)
        console.log("old item is", oldItem);

    }
    const updateHandler = () => {
        if (itemEditInput != "") {
            let updateItem = {
                description: itemEditInput
            }
            let updateText = todoList.map((item) => {
                if (oldItem.description == item.description) {
                    return updateItem
                }
                else {
                    return item
                }
            })
            // setTodoList(updateText)
            dispatch(sliceUpdateHandler(updateText))
            setIsUpdate(false)
            setitemEditInput("")
        }
        else{
            alert("item cannot be empty")
        }
    }
    // const editHandler = (item: TodoType) => {
    //     setInputText(item.description)
    //     setIsUpdate(true)
    //     setOldItem(item)


    // }
    // const updateHandler = () => {
    //     let updatedItem = {
    //         description: inputText
    //     }
    //     let updatedTodoList = todoList.map((item) => {
    //         if (oldItem.description == item.description) {
    //             return updatedItem
    //         }
    //         else {
    //             return item
    //         }
    //     })
    //     setTodoList(updatedTodoList)
    //     setIsUpdate(false)
    //     setInputText("")
    // }


    return {
        inputText,
        setInputText,
        // todoList,
        // setTodoList,
        isUpdate,
        setIsUpdate,
        oldItem,
        setOldItem,
        itemDescription,
        itemEditInput, setitemEditInput,
        addHandler,
        clearAllHandler,
        deleteHandler,
        editHandler,
        updateHandler
    }
}

export default useTodos