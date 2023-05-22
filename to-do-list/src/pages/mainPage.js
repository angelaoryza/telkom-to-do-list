import '../App.css';
import Tasks from '../components/tasks';
import AddTask from '../components/tasks/AddTask';
import {useState, useEffect} from 'react'
import {collection, query, onSnapshot} from "firebase/firestore"
import { db } from '../firebase'

const MainPage = () => {
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        try {
            const q = query(collection(db,'to-do-list'))
            onSnapshot(q, (QuerySnapshot) =>{
                setTasks(QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    deadline: doc.data().deadline,
                    desc: doc.data().desc,
                    tags: doc.data().tags,
                    done: doc.data().done,
                })))
            } )
        } catch (err) {
            console.log(err)
        }

    })

      return (
        <div  class="">
          <header>
            <div>
                <AddTask />
            </div>
            <div>
                <Tasks tasks={tasks}/>
            </div>
        </header>
    </div>
      )

}

export default MainPage