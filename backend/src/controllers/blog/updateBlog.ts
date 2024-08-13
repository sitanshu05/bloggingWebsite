import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const updateBlog = async (c : Context) => {

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        data : {
            title : body.title,
            content : body.content,
        },
        where : {
            id : body.id,
            authorId : c.get("id")
        }
    })

    return c.json({
        id : blog.id
    })

}