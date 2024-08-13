import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { LabeledInput } from "./LabeledInput"


export const Auth = ({type} : {type : "signup" | "signin"}) => {

    const [postInput,setPostInput] = useState({
        username : "",
        password : "",
        email : ""
    })

    const navigate = useNavigate()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostInput({...postInput,[e.target.name]:e.target.value})
    }

    const onClickHandler = async () => {

        let body = {}
        if(type == "signin"){
            body = {
                email : postInput.email,
                password : postInput.password
            }
        }else{
            body = {
                name : postInput.username,
                email : postInput.email,
                password : postInput.password
            }
        }
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/${type}`, body)

        localStorage.setItem("Authorization",response.data.token)
        navigate("/blogs")
    }

    return (
        <div className="flex justify-center flex-col">
            <div className="flex items-center justify-center flex-col mt-48">
                <div className="text-3xl font-extrabold">
                    {type=="signin" ? "Log in to your Account": "Create an Account" }
                </div>
                <div className="text-slate-400">
                    { type == "signin" ? "Need an Account?" : "Already have an account?"} <Link to={type=="signin" ? "/signup" : "/signin"} className=" pl-1 underline">{type=="signin" ? "Sign Up" : "Sign In"}</Link>
                </div>
                <div className="w-10/12 mt-8 max-w-md">

                   {type === "signup" && <div className="mt-5">
                        <LabeledInput label="username" 
                            placeholder="username" 
                            onChange={changeHandler} 
                            value={postInput.username}/>
                    </div>}
                    <div className="mt-5">
                        <LabeledInput label="email" 
                            placeholder="email" 
                            onChange={changeHandler} 
                            value={postInput.email}/>
                    </div>
                    <div className="mt-5">
                        <LabeledInput label="password" 
                            placeholder="password" 
                            onChange={changeHandler} 
                            value={postInput.password}
                            type="password"/>
                    </div>
                    <div className="mt-5">
                        <Button text={type} onClick={onClickHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}