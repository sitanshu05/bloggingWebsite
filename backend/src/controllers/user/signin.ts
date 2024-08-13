import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { sign } from "hono/jwt";

export const singin = async (c : Context) => {

    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const token = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ token : `Bearer ${token}` });
}