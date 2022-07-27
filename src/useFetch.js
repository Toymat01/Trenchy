import { useEffect, useState } from "react";
import useToken from "./components/useToken";

const useFetch = (url) =>{
    const[posts, setPosts] = useState(null);
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {token} = useToken();
    
    const axios = require('axios');

    useEffect(() => {
        if(token){
         axios.get(url,{
           headers:{'Authorization':`Bearer ${token}`}
         })
         .then(res => {
            const posts = res.data.data
            const post = res.data.post
            setPosts(posts)
            setPost(post)
           setIsLoading(false)
           setError(null)
         })
         .catch(err => {
            setError(err.message)
            setIsLoading(false)
            setPosts(null)
            console.log(err.message)
            setPost(null)
        })
        }
         },[token, url, axios])

      return{posts, post, isLoading, error,token}   
}

export default useFetch;