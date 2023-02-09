import { Box } from "@chakra-ui/react"
import react from "react"
import { Button } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"
const MainButton = (props) => {
    return (
        <Button  colorScheme='blue' onClick={props.onClick} >{props.icon}</Button>
    )
}
export default MainButton

