import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const addBlog = async (c : Context) => {

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : c.get("id")
        }
    })

    return c.json({
        id : blog.id
    })

}