import axios from "axios";
import { useEffect, useState } from "react"

export interface Blog {
    id :string,
    content : string,
    title : string,
    author : {
        name : string
    }
}
export const useBlog = ({id} : {id:string}) => {

    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`).then(response =>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])


    return {loading,blog}
}