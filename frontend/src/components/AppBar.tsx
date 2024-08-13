import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import { Button } from "./Button"

export const AppBar = () => {
    const navigate = useNavigate()
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <div className="flex flex-col justify-center">
                <Link to={"/blogs"}>Medium</Link>
            </div>
            <div>
            <div className="flex justify-center">
                {!localStorage.getItem("Authorization") && <div className="mr-2">
                    <Button onClick={() =>navigate("/signin")} text={"Login"}/>
                </div> }
                {localStorage.getItem("Authorization") && <Link to={`/publish`}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New Blog</button>
                </Link>}
                    <Avatar name="Sitanshu" size="big"/>
                </div>
            </div>
        </div>
    )
}