import axios from "axios";

export const ApiCaller = (route , id , path , query)=>{
        
    const Url =`https://jsonplaceholder.typicode.com${route}/${id ||''}${path||''}` 

    const config = { 
        url : query ? `${Url}?postId=${query}`: Url ,
    }

    return axios(config);

}

    