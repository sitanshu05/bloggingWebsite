import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const getBlog = async (c: Context) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const id = c.req.param('id');
    const blog = await prisma.blog.findUnique({
        select : {
            id : true,
            title : true,
            content : true,
            author : {
                select : {
                    name : true
                }
            }
        },
        where: {
            id: id
        }
    })

    if(!blog){
        return c.text('Blog not found',404)
    }

    return c.json({blog : blog})
}