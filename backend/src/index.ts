import { Hono } from 'hono'
import rootRouter from "./routes"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cors } from 'hono/cors'

const app = new Hono()


app.use(cors()) 

app.route("/api/v1",rootRouter);


export default app
