import { async } from "@firebase/util"
import { useState } from "react"
import book from "../../img/book.png"
import unicorn from "../../img/unicorn.png"
import cake from "../../img/cake-slice.png"
import plane from "../../img/paper-plane.png"
import flower from "../../img/magic.png"
import Modal from "../modal/modal"


const AddTask = () => {

    const background = require("../../img/pink.jpeg")
return (
    
    <div class="h-screen inline-block w-screen gap-y-6" style={{backgroundImage: `url(${background})` , backgroundSize:'cover'}}>
        <img class="relative left-0 top-0  w-1/6"src={book} />
        <img class="absolute  right-56 top-0 w-1/6 "src={flower} />
        <div  class="flex flex-col self-center items-center gap-y-6" >
            <p className="font-caveat text-3xl"> Let's Be Productive </p>
            <p className="font-sigmar text-6xl"> Your Truly To Do List </p>
            <p className="font-roboto text-xl"> Place where you could write down all things that burden you </p>
            <Modal />
        </div>
        <img class="absolute bottom-0 left-0  w-1/5"src={cake} />
        <img class="absolute bottom-0 right-0 w-1/5 "src={unicorn} />
        <img class="absolute  bottom-4 right-96 w-1/12 "src={plane} />
    </div>
)
}
export default AddTask