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
import { Box, Input } from '@chakra-ui/react'
import MainButton from './mainButton'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'

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

        <Box w="100%" h="auto" bg="rgb(209,228,244)" p={3} borderRadius={15}>
            <Box display="flex">
                {/* <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} /> */}
                <Input
                    color='#343a40'
                    fontSize='1.2rem'
                    placeholder='Enter your todos'
                    _placeholder={{ color: 'inherit' }}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                {/* {isUpdate ? <button onClick={updateHandler}>Update Value</button> :  */}
                <Box display='grid' gap={1} gridAutoFlow="column dense">
                    {/* <button onClick={addHandler}>Add</button> */}
                    <MainButton onClick={addHandler} icon={<AddIcon boxSize={5} />} />
                    <MainButton onClick={clearAllHandler} icon={<DeleteIcon boxSize={5} />} />
                    {/* <button onClick={clearAllHandler}>Clear</button> */}
                </Box>
                {/* } */}
            </Box>


            {
                todoList.map((item: TodoType, index) => {
                    return (

                        <Box key={index}>

                            <ol>
                                <li>
                                    {/* <ListIcon color='green.500' /> */}
                                    {isUpdate && item.description == itemDescription ? <Box><input type="text" value={itemEditInput} onChange={(e) => setitemEditInput(e.target.value)} /><button onClick={() => updateHandler(item)}>Update</button></Box> : <Box>            {item.description}
                                        {/* <button onClick={() => editHandler(item)}>edit</button> */}
                                        <button onClick={() => editHandler(item)}>Edit</button>
                                        <button onClick={() => deleteHandler(item)}>Delete</button></Box>}
                                </li>

                            </ol>

                        </Box>
                    )
                })
            }
        </Box >
    )
}

export default TodoCard
