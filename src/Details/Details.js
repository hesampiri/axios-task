import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CircularIndeterminate from '../Progress'
import Infos from '../infos/Infos'

function Details(){

    const[post , setpost] = useState({});
    const[isloading , setisloading] = useState(false);
    
    let userID = useParams().postID
    
    const URL = `https://jsonplaceholder.typicode.com/posts/${userID}`;

    useEffect(()=>{
        setisloading(true)
        axios.get(URL)
        .then((res)=>{
            setpost({...res.data})
            setisloading(false)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <>
            <div className="flex justify-center">
                {isloading ? <CircularIndeterminate/> : <Infos info={post} />}
            </div>
        </>
    )
}

export default Details