import React from "react"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"
const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')
    const [desc, setDesc] = useState('')
    let activeTags = []

    const onSubmit = async(e) => {
        e.preventDefault()

        if(!title) {
            alert("Please add a task")
            return
        }

        tags.map(tag => {
            if (tag.checked) {
                activeTags.push(tag.name)
            }
        })

        try {
            await addDoc(collection(db, 'to-do-list'), {
                title: title,
                desc : desc,
                deadline : deadline,
                tags : activeTags,
                done : false
            })
        } catch (err) {
            console.log(err)
        }

        setTitle('')
        setDeadline('')
        setDesc('')
        setShowModal(false)
        let clearTags = tags.map(tag => {
            return {...tag, checked : false}
        })
        setTags(clearTags)
        activeTags = []
    }

        const [tags, setTags] = useState([
            {
                name : 'Home',
                checked : false,
                color : '#4ade80'
            },
            {
                name : 'College',
                checked : false,
                color : '#22d3ee'
            },
            {
                name : 'Refreshing',
                checked : false,
                color : '#818cf8'
            },
            {
                name : 'Appointment',
                checked : false,
                color : '#fda4af'
            },
            {
                name : 'Dates',
                checked : false,
                color : '#fbcfe8'
            },
            {
                name : 'Others',
                checked : false,
                color: '#fef3c7'
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
        <div class="flex justify-center items-center outline-none focus:outline-none ">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => setShowModal(true)}> Write Your Task </span></button>
            {
                showModal? (
                    <div class="flex flex-col h-2/3  w-1/2 fixed z-50 -mt-48 rounded-lg shadow bg-white p-8">
                        <button onClick={() => setShowModal(false)} type="button" class="absolute top-5 right-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" ></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <p class="text-xl self-start mt-8">Please write the detail of your task</p>
                        <form class="flex flex-col justify-center  items-start mt-10 " onSubmit={onSubmit}>
                            <label> Title </label>
                            <input 
                                type="text" 
                                placeholder="Set Your Task" 
                                value={title} 
                                onChange={(e) =>
                                setTitle(e.target.value)}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4">
                            </input>
                            <label> Deadline </label>
                            <input 
                                type="date" 
                                placeholder="Set Your Deadline"                
                                value={deadline} 
                                onChange={(e) =>
                                setDeadline(e.target.value)}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4">
                            </input>
                            <label> Description </label>
                            <input 
                                type="text" 
                                placeholder="Set Your Description"                 
                                value={desc} 
                                onChange={(e) =>
                                setDesc(e.target.value)}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-10">
                            </input>
                            <ul className="flex justify-between gap-5 mb-8">
                                {tags.map(({name, checked, color}, index)=> {
                                    return (
                                        <li className="flex justify-center p-2 rounded-lg text-sm" key={index} style={{ backgroundColor: color}}>
                                            <input
                                            type="checkbox"
                                            name={name}
                                            value={name}
                                            checked={checked}
                                            onChange={()=>handleOnChange(index)}
                                            className="rounded-full">
                                            </input>
                                            <label class="ml-2">{name}</label>
                                        </li>
                                    )
                                })}
                            </ul>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-10 mr-2 w-full overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <input class="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" type="submit" value='Save Task'></input></button>
                        </form>
                    </div>
                ) : null
            }
        </div>
    )
}
export default Modal