import axios from "axios"
import { useEffect, useState } from "react"

interface Blog {
    id :string,
    content : string,
    title : string,
    author : {
        name : string
    }

}
export const useBlogBulk = () => {
    const [loading,setLoading] = useState(true)
    const [blogs,setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/bulk`).then(response =>{
            console.log(response.data.blogs)
            setBlogs(response.data.blogs)
            setLoading(false)
        })


    },[])
    
    return {loading,blogs}
}