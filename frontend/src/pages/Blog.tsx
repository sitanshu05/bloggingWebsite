import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlog"
import { FullBlog } from "../components/FullBlog"
import { Spinner } from "../components/Spinner"
import { AppBar } from "../components/AppBar"

const Blog: React.FC= () => {

  const {id} = useParams()

  const {loading,blog} = useBlog({id : id || ""})

  if(loading){
    return (
    <div>
      <AppBar /> 
      <div className="flex justify-center h-screen flex-col">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    </div>)
  }

  if(!blog){
    return <div>No blogs</div>
  }

    return (
      <div>
          <FullBlog blog={blog} />
      </div>
    )
  }
  
  export default Blog