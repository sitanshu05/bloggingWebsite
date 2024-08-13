import {Context, Hono} from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import  { sign } from "hono/jwt"

export const signup = async (c : Context) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const { email, name, password} = await c.req.json();

   const user =  await prisma.user.create({
        data : {
            name,
            email,
            password 
        }
    })

    const token = await sign({id : user.id}, c.env.JWT_SECRET)
    return c.json({token : `Bearer ${token}`})
}
