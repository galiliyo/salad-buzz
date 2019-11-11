import {useState} from "react"

export function useActiveItem(){
    const [activeItem, setActiveItem] = useState()
    return {
        activeItem, setActiveItem
    }
}