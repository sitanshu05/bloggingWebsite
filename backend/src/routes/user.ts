import {Hono} from "hono";
import { singin } from "../controllers/user/signin";
import { signup } from "../controllers/user/signup";

const app = new Hono();

app.post("/signup",signup);
app.post("/signin",singin)

export default app