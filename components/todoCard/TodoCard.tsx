import React, { useState } from 'react'
import { TodoType } from '../../types/todoType'
import useTodos from '../../customHooks/useTodos'
import { useSelector } from 'react-redux'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Checkbox, Input, Text } from '@chakra-ui/react'
import MainButton from './MainButton'
import { DeleteIcon, AddIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'
import DeleteAlertDialog from './DeleteAlertDialog'


const TodoCard = () => {
    const todoList = useSelector((state: any) => state.todoSlice.todos)
    const { inputText,
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
        updateHandler,
        value
    } = useTodos()
    return (

        <Box w="100%" h="auto" bg="rgb(209,228,244)" p={3} borderRadius={15}>
            {value && <Alert status='error'>
                <AlertIcon />
                <AlertTitle>List Cannot be empty</AlertTitle>
                <AlertDescription>Please Enter Your Todo!</AlertDescription>
            </Alert>}
            <Box display="flex" justifyContent="space-between">
                {/* <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} /> */}
                <Input
                    color='#343a40'
                    fontSize='1.2rem'

                    placeholder='Enter your todos'
                    _placeholder={{ color: 'inherit' }}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    mr="2"
                />
                {/* {isUpdate ? <button onClick={updateHandler}>Update Value</button> :  */}
                <Box display='grid' gap={1} gridAutoFlow="column dense">
                    {/* <button onClick={addHandler}>Add</button> */}
                    <MainButton onClick={addHandler} icon={<AddIcon boxSize={5} />} />
                    {/* <MainButton onClick={clearAllHandler} icon={<DeleteIcon boxSize={5} />} /> */}
                    <DeleteAlertDialog onClick={clearAllHandler} icon={<DeleteIcon boxSize={5} />} />

                    {/* <button onClick={clearAllHandler}>Clear</button> */}
                </Box>
                {/* } */}
            </Box>
            <br />


            {
                todoList.map((item: TodoType, index: number) => {
                    return (

                        <Box key={index} mt={2}  >
                            {/* checkbox errror */}
                            <Box bg="white" w="100%" border='1px' borderColor='gray.200' borderRadius={10} p={2}>
                                {/* <ListIcon color='green.500' /> */}
                                {isUpdate && item.description == itemDescription ? <Box display='flex' justifyContent="space-between" alignItems="center
                                "  w="22rem"> <Input
                                        color='#343a40'
                                        fontSize='1.2rem'
                                        placeholder='Enter your todos'
                                        _placeholder={{ color: 'inherit' }}
                                        value={itemEditInput}
                                        onChange={(e) => setitemEditInput(e.target.value)}
                                    /><MainButton onClick={() => updateHandler(item)} icon={<CheckIcon boxSize={3} />} /></Box> : <Box display='flex' justifyContent="space-between" alignItems="center
                                "  w="22rem" >
                                    <Text fontSize="1.2rem"
                                    >{item.description}</Text>
                                    <Box display='grid' gap={1} gridAutoFlow="column dense">
                                        <MainButton onClick={() => {
                                            editHandler(item)
                                        }} icon={<EditIcon boxSize={3} />} />
                                        <DeleteAlertDialog onClick={() => deleteHandler(item)} icon={<DeleteIcon boxSize={3} />} />

                                        {/* <MainButton onClick={() => deleteHandler(item)} icon={<DeleteIcon boxSize={3} />} /> */}
                                    </Box>
                                </Box>}
                            </Box>

                        </Box>
                    )
                })
            }
        </Box >
    )
}

export default TodoCard
