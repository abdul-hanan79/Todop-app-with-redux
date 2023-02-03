import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
const TodoCard = () => {
    type TodoType = {
        createdAt?: string,
        description: string,
        id?: string
    }
    const [inputText, setInputText] = useState<string>('')
    const [todoList, setTodoList] = useState<TodoType[]>([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [oldItem, setOldItem] = useState({})
    const addHandler = () => {
        let newTodoList: TodoType = {
            description: inputText
        }
        setTodoList([...todoList, newTodoList])
        setInputText('')
        console.log("todolist is=================>", todoList);

    }
    const clearAllHandler = () => {
        setTodoList([])
    }
    const deleteHandler = (item: TodoType) => {
        console.log("item deleted", item)
        let filteredTodos = todoList.filter((todo) => {
            console.log("filter todo==>", todo);
            if (todo.description != item.description) {
                return todo
            }
        })

        setTodoList(filteredTodos)
        console.log("updated value of todolist is", todoList);

    }
    // const editHandler = (item: TodoType) => {
    //     setInputText(item.description)
    //     setIsUpdate(true)
    //     setOldItem(item)
    //     console.log("old item is", oldItem);

    // }
    // const updateHandler = () => {
    //     let updateItem = {
    //         description: inputText
    //     }
    //     let updateText = todoList.map((item) => {
    //         if (oldItem.description == item.description) {
    //             return updateItem
    //         }
    //         else {
    //             return item
    //         }
    //     })
    //     setTodoList(updateText)
    //     setIsUpdate(false)
    // }
    const editHandler = (item: TodoType) => {
        setInputText(item.description)
        setIsUpdate(true)
        setOldItem(item)

    }
    const updateHandler = () => {
        let updatedItem = {
            description: inputText
        }
        let updatedTodoList = todoList.map((item) => {
            if (oldItem.description == item.description) {
                return updatedItem
            }
            else {
                return item
            }
        })
        setTodoList(updatedTodoList)
        setIsUpdate(false)
    }
    return (

        <div>
            <Box>
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                {isUpdate ? <button onClick={updateHandler}>Update Value</button> : <div><button onClick={addHandler}>Add</button><button onClick={clearAllHandler}>Clear</button>
                </div>}
            </Box>


            {
                todoList.map((item: TodoType) => {
                    return (

                        <Box>

                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    {item.description} <button onClick={() => editHandler(item)}>edit</button><button onClick={() => deleteHandler(item)}>Delete</button>
                                </ListItem>

                            </List>

                        </Box>
                    )
                })
            }
        </div>
    )
}

export default TodoCard
