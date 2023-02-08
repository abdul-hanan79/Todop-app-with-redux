import { useState } from 'react'
import { TodoType } from '../types/todoType'
import { useSelector, useDispatch } from "react-redux"
import { sliceAddHandler, sliceClearHandler, sliceDeleteHandler, sliceUpdateHandler } from '../store/todoSlice'

const useTodos = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state: any) => state.todoSlice.todos)
    const [inputText, setInputText] = useState<string>('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [oldItem, setOldItem] = useState({})
    const [itemDescription, setItemDesciption] = useState("")
    const [itemEditInput, setitemEditInput] = useState("")

    const addHandler = () => {
        console.log("button is clicked")
        if (inputText != "") {
            let newTodoList: TodoType = {
                description: inputText
            }
            dispatch(sliceAddHandler(newTodoList))

            setInputText('')

        }
        else {
            alert("item cannot be empty")
        }
    }

    const clearAllHandler = () => {
        dispatch(sliceClearHandler())

    }

    const deleteHandler = (item: TodoType) => {
        console.log("item deleted", item)

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

    const updateHandler = (item:any) => {
        if (itemEditInput != "") {
            let updateItem = {
                description: itemEditInput
            }

            let itemAndUpdateItem = {
                item,
                updateItem
            }
            dispatch(sliceUpdateHandler(itemAndUpdateItem))
            setIsUpdate(false)
            setitemEditInput("")
        }
        else {
            alert("item cannot be empty")
        }
    }


    return {
        inputText,
        setInputText,
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