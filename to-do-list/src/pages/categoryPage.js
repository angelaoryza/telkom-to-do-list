import { useParams } from "react-router-dom"
import React from "react"
import { useEffect, useState} from "react"
import { query, collection, getDocs, where, doc, updateDoc} from "firebase/firestore"
import { db } from "../firebase"
import DeleteTask from "../components/tasks/DeleteTask"
const CategoryTask = () => {
    const {cat} = useParams()
    const[tasks, setTasks] = useState([])
    const background = require("../img/bg-page.jpeg")
    useEffect(()=> {
        async function handleFilter() {
            try {

                    const todoDoc = collection(db,'to-do-list')

                        const q = query(todoDoc, where("tags", "array-contains", cat));
            
                        const qs1 = await getDocs(q);

                        setTasks(qs1.docs.map(doc => ({
                            id: doc.id,
                            title: doc.data().title,
                            deadline: doc.data().deadline,
                            desc: doc.data().desc,
                            tags: doc.data().tags,
                            done: doc.data().done
                        })))

                }
                    
            catch(err) {
                console.log(err)
            }
        
        };
        handleFilter()

        }, [tasks])
    const handleOnChange = async (id, done) => {
    
        const taskDocRef = doc(db, 'to-do-list', id)
        try{
          await updateDoc(taskDocRef, {
            done : !done
          })
        } catch (err) {
          alert(err)
        }   
    }
    // const[tasks, setTaks] = useState([
    //     {
    //         id : 1234,
    //         title : 'Playing laptop',
    //         desc : 'learning and playing',
    //         deadline : '24 May 2021',
    //         tags : ['Home, Appointment'],
    //         done : false
    //     },
    //     {
    //         id : 5678,
    //         title : 'Playing computer',
    //         desc : 'learning and doing',
    //         deadline : '24 May 2023',
    //         tags : ['Home, College'],
    //         done : false
    //     }
    // ])


    return (
        <div className="flex flex-col justify-start items-center h-screen w-screen" style={{backgroundImage: `url(${background})` , backgroundSize:'cover'}}>
            <h2 className="font-sigmar text-7xl my-10">{cat} </h2>
            {tasks.map((task, index)=> {
                return (
                    <div className={task.done === true? 'flex justify-start mb-4 items-center h-1/6 w-2/5 rounded-lg px-4 bg-sky-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg' : 'flex justify-start mb-4 items-center h-1/6 w-2/5 rounded-lg px-4 bg-violet-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'}>
                        <input
                            type="checkbox"
                            value={task.id}
                            checked={task.done}
                            onClick={()=>handleOnChange(task.id, task.done)}
                            // onChange={()=>handleOnChange(index)}
                            className="rounded-full mr-4">
                        </input>
                        <div class="flex flex-col justify-evenly items-around gap-4">
                            <h2 class="font-caveat font-bold text-3xl"> {task.title} </h2>
                            <h2 class="font-mono font-extralight text-md"> {task.desc} </h2>
                            <h2> {task.deadline} </h2>
                        </div>
                        <div className="absolute right-8">
                            <DeleteTask id={task.id}/>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default CategoryTask