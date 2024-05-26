import { useEffect, useState } from "react";
import { ApiCaller } from "../ApiCaller";
import ComntSection from './ComntSection';
import PaginationRounded from '../Pagination/Pagination'
import CircularIndeterminate from "../Progress";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ComntPage(){

    const[comments , setcomments] = useState([]);
    const[isloading , setisloading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    const[inputvalue , setinputvalue] = useState('');

    const[searchparams , setsearchParams] = useSearchParams();

    useEffect(()=>{
        const postId = searchparams.get('postId')
        setinputvalue(postId ? postId :'')
        setisloading(true);
        ApiCaller('/comments' , null , postId)
        .then((res)=>{
            setcomments([...res.data])
            setisloading(false) 
        })
        .catch((err)=>[
            console.log(err)
        ])
    },[])

    useEffect(()=>{
        setisloading(true);
        ApiCaller('/comments' , null , null , inputvalue)
        .then((res)=>{
            setcomments([...res.data])
            setisloading(false) 
        })
        .catch((err)=>[
            console.log(err)
        ])
    },[inputvalue])

    function inputhandler(e){
        
        setsearchParams({postId : `${e.target.value}`})
        setinputvalue(e.target.value)
    } 
    
    function resethandler(){
        setsearchParams({})
        setinputvalue('')
    }

    const indexOfLastpost = currentPage * postPerPage ; 
    const indexOfFirstpost = indexOfLastpost - postPerPage ; 
    const currentposts = comments.slice(indexOfFirstpost , indexOfLastpost);
    const pages = comments.length / postPerPage ;
  
    const paginate = (pagenumebr)=>{setcurrentPage(pagenumebr)}
    
    
    return(
        <>
        <h1 className="text-center text-lg font-bold p-4">Comment Page</h1>
        <div className="border-2 p-3">
            <p className="py-2">pick a numebr in scale of 1 to 100 </p>
            <input type="number" className="border-2 p-1" min={1} max={100} onChange={inputhandler} value={inputvalue}/>
            <button className="p-1 px-2 border-2 mx-2 capitalize bg-blue-500 text-white" onClick={resethandler} >reset</button>
            <Link to={'/'}>
                <button className="bg-pink-300 p-1 capitalize border-2">back to home</button>
            </Link>
        </div>
        {isloading ? <CircularIndeterminate/> : <ComntSection comments={currentposts}/> }
        <PaginationRounded paginate={paginate} number={Math.round(pages)} />
        </>
    )
}

export default ComntPage ; 