import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogBulk } from "../hooks/useBlogBulk"

export const Blogs = () => {

    const {loading,blogs} = useBlogBulk();

    if(loading){
        return (
            <div>
                <AppBar />
                <div className="flex justify-center">
                    <div>
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            authorName={blog.author.name}
                            content={blog.content}
                            publishedDate="2nd Feb 2024"
                            id={blog.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}