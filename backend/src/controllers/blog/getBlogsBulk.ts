import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const getBlogsBulk = async (c: Context) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.blog.findMany({
		select : {
			content : true,
			title : true,
			id : true,
			author : {
				select : {
					name : true
				}
			}
		}
	});

	return c.json({blogs : posts});
}
