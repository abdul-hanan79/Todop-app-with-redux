import React from 'react'
import TodoCard from '../components/todoCard/TodoCard'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Text } from "@chakra-ui/react"
import useTodos from '../customHooks/useTodos'
import DeleteAlertDialog from '../components/todoCard/DeleteAlertDialog'
const Todo = () => {
    return (

        <Box w="100%" h="100vh" bgGradient="linear(to-b, rgb(52,131,200), rgb(6,200,250))" display="flex" alignItems="center" justifyContent="center" pr={8} pl={8}>
            <Box>


                <Text align="center" bgClip="text"
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    fontSize={{ base: '2.2rem', md: '4.2rem', lg: '4.2rem' }}
                    fontWeight="extrabold">Todo List</Text>
                <TodoCard />
            </Box>
        </Box>
    )
}

export default Todo
