import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export const BlogCard : React.FC<BlogCardProps> = ({authorName,title,content,publishedDate,id}) => {

    return(
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-400 p-4 px-5 cursorpointer">
                <div className="flex ">
                    <div className="flex justify-center flex-col">
                        <Avatar name={authorName} />
                    </div>
                    <div className="font-extralight pl-2">{authorName} </div>
                    <p className="pl-2 font-thin text-slate-400"> {" |"}</p>
                    <div className="font-thin pl-2 text-slate-500">{publishedDate}</div>
                </div>
                <div  className="text-xl font-semibold mt-2">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0,100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin mt-4">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    )
}