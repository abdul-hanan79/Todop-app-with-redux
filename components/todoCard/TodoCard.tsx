import React, { useState } from 'react'
import { TodoType } from '../../types/todoType'
// import { Box } from '@chakra-ui/react'
// import {
//     List,
//     ListItem,
//     ListIcon,
//     OrderedList,
//     UnorderedList,
// } from '@chakra-ui/react'
import useTodos from '../../customHooks/useTodos'
import { useSelector } from 'react-redux'

const TodoCard = () => {
    const todoList = useSelector((state: any) => state.todoSlice.todos)
    const { inputText,
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
    } = useTodos()
    return (

        <div>
            <div>
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                {/* {isUpdate ? <button onClick={updateHandler}>Update Value</button> :  */}
                <div>
                    <button onClick={addHandler}>Add</button>
                    <button onClick={clearAllHandler}>Clear</button>
                </div>
                {/* } */}
            </div>


            {
                todoList.map((item: TodoType) => {
                    return (

                        <div>

                            <ol>
                                <li>
                                    {/* <ListIcon color='green.500' /> */}
                                    {isUpdate && item.description == itemDescription ? <div><input type="text" value={itemEditInput} onChange={(e) => setitemEditInput(e.target.value)} /><button onClick={() => updateHandler()}>Update</button></div> : <div>            {item.description}
                                        {/* <button onClick={() => editHandler(item)}>edit</button> */}
                                        <button onClick={() => editHandler(item)}>Edit</button>
                                        <button onClick={() => deleteHandler(item)}>Delete</button></div>}
                                </li>

                            </ol>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoCard
