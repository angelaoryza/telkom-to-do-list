import React from "react"
import { useState } from "react"
const TaskTags = () => {
    const [tags, setTags] = useState([
        {
            name : 'Home',
            checked : false
        },
        {
            name : 'College',
            checked : false
        },
        {
            name : 'Refreshing',
            checked : false
        },
        {
            name : 'Appointment',
            checked : false
        },
        {
            name : 'Dates',
            checked : false
        },
        {
            name : 'Others',
            checked : false
        },
    ])

    const handleOnChange = (pos) => {
        let updatedList = tags.map((tag, index) => {
            if(index == pos) {
                return {...tag, checked: !tag.checked}
            }
            return tag;
        })

        setTags(updatedList)
    }

    return (
        <>
        <ul>
            {tags.map(({name, checked}, index)=> {
                return (
                    <li key={index}>
                        <input
                        type="checkbox"
                        name={name}
                        value={name}
                        checked={checked}
                        onChange={()=>handleOnChange(index)}>
                        </input>
                        <label>{name}</label>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export default TaskTags

