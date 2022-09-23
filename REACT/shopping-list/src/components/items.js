import React from 'react'
import '../styles/item.css'

//functional way of creating a component.
const item = ({id, items, list, setList, complete}) => {
    const remove = (id) => {
        setList(list.filter((el) => el.id !== id))
    }
    const handleComplete = (id) => {
        setList(
            list.map((item) => {
                if (item.id === id){
                    return {
                        ...item, complete: !item.complete
                    }
                }
                return item;
            })
        )
    }
    return (
        <div className = 'item'>
            <p className = {complete? "complete" : ""}>{items}</p>
            <img onClick={() => handleComplete(id)} src = "https://img.icons8.com/offices/40/000000/checked-2--v2.png" alt='complete task'/>
            <img onClick={() => remove(id)} src = "https://img.icons8.com/color/48/000000/trash.png" alt='delete' />
        </div>
    )
}

export default item;