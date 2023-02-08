import React from 'react'
import TodoCard from '../components/todoCard/TodoCard'
import { Box, Text } from "@chakra-ui/react"
const Todo = () => {
    return (

        <Box w="100%" h="100vh" bgGradient="linear(to-b, rgb(52,131,200), rgb(6,200,250))" display="flex" alignItems="center" justifyContent="center">
            <Box>
                <Text bgClip="text"
                    color={"rgb(6,200,250)"}
                    fontSize="6xl"
                    fontWeight="extrabold">Todo List</Text>
                <TodoCard />
            </Box>
        </Box>
    )
}

export default Todo
