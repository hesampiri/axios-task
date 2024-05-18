import axios from "axios";

export const ApiCaller = (param , id , query)=>{
        
    const Url =`https://jsonplaceholder.typicode.com${param}/${id ||''}` 

    const config = {
        url : query ? `${Url}?postId=${query}`: Url ,
    }

    return axios(config);

}

    