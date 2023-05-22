import { useParams } from "react-router-dom"
const DetailApp = () => {
    const {id} = useParams()
    

    return (
        <>
            <h2>Blog Details - {id} </h2>
        </>
    )
}

export default DetailApp