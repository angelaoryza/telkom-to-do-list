// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import DetailApp from '../../pages/taskDetail'
import { Link } from 'react-router-dom'
import DeleteTask from './DeleteTask'
import { useState, useEffect } from 'react'
import { query, where, collection, getCountFromServer } from "firebase/firestore"; 
import { db } from '../../firebase'; 
import { async } from '@firebase/util';
const Tasks = ({tasks}) => {
    const background = require("../../img/rainbow.jpeg")
    const [tags, setTags] = useState([
        {
            name : 'Home',
            color : '#4ade80',
            count : 0
        },
        {
            name : 'College',
            color : '#22d3ee',
            count : 0
        },
        {
            name : 'Refreshing',
            color : '#818cf8',
            count : 0
        },
        {
            name : 'Appointment',
            color : '#fda4af',
            count : 0
        },
        {
            name : 'Dates',
            color : '#fbcfe8',
            count : 0
        },
        {
            name : 'Others',
            color: '#fef3c7',
            count : 0
        },
    ])





useEffect(()=> {
        async function handleFilter() {
            try {

                        const todoDoc = collection(db,'to-do-list')

                        const q1 = query(todoDoc, where("tags", "array-contains", "Home"));
                        const q2 = query(todoDoc, where("tags", "array-contains", "College"));
                        const q3 = query(todoDoc, where("tags", "array-contains", "Refreshing"));
                        const q4 = query(todoDoc, where("tags", "array-contains", "Appointment"));
                        const q5 = query(todoDoc, where("tags", "array-contains", "Dates"));
                        const q6 = query(todoDoc, where("tags", "array-contains", "Others"));
            
                        const qs1 = await getCountFromServer(q1);
                        const qs2 = await getCountFromServer(q2);
                        const qs3 = await getCountFromServer(q3);
                        const qs4 = await getCountFromServer(q4);
                        const qs5 = await getCountFromServer(q5);
                        const qs6 = await getCountFromServer(q6);


                        let updatedCount = tags.map(tag => {
                            if(tag.name==="Home") {
                                return{...tag,count:qs1.data().count}
                            }
                            else if(tag.name==="College") {
                                return{...tag,count:qs2.data().count}
                            }
                            else if(tag.name==="Refreshing") {
                                return{...tag,count:qs3.data().count}
                            }
                            else if(tag.name==="Appointment") {
                                return{...tag,count:qs4.data().count}
                            }
                            else if(tag.name==="Dates") {
                                return{...tag,count:qs5.data().count}
                            }
                            else if(tag.name==="Others") {
                                return{...tag,count:qs6.data().count}
                            }
                            return tag
                        })
                    setTags(updatedCount)
                    
            }
            catch(err) {
                console.log(err)
            }
        
        };
        handleFilter()

        }, [tags])

 




   

return (
<div class=" flex flex-col justify-center items-center w-screen h-screen">
    <div class="flex justify-center items-center w-full h-20 bg-sky-200" style={{backgroundImage: `url(${background})` , backgroundSize:'cover'}}></div>
    <div class="flex flex-col justify-between items-center w-2/3 pt-14 gap-4">
    <p className='font-mono font-bold text-xl'>Welcome back, Angela!</p>
    <p className='font-serif text-lg text-center'>In this section, you will find all tasks you have created before. We have filter it out according to the tags you've assigned
        in hope you will find it easiser to read. Click the desired tags you want to dig more!
    </p>
    </div>
    <div class="flex justify-stretch items-center w-full h-full  gap-4 px-6 -mt-10">
        
        {
            tags.map((tag)=> (
                <div class="flex justify-center items-center w-full h-3/5 hover:-translate-y-1 hover:scale-110 transition ease-in-out "style={{backgroundColor: tag.color}}>
                    
                    <div className='flex flex-col justify-center items-center w-3/4 h-3/4 bg-white'> 
                    
                    <Link to={`/category/${tag.name}`}><p className='font-allura text-3xl font-bold'>{tag.name}</p></Link>
                        <p className='font-allura text-3xl font-bold'>{tag.count}</p>
                    </div>   
                </div>
                )

            )
        }
    </div>
    <div class="flex justify-center items-center w-full h-20 bg-sky-200" style={{backgroundImage: `url(${background})` , backgroundSize:'cover'}}></div>
</div>
)

}
export default Tasks