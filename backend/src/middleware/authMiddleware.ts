import { Context, Next } from "hono"
import { verify } from "hono/jwt"

export const authMiddleware = async (c: Context, next: Next) => {
    const authHeader = c.req.header('Authorization')
    
    if (!authHeader) {
      return c.text('Unauthorized', 401)
    }

    const token = authHeader.split(' ')[1]
  
    try {
        // Verify the token
        const decoded = await verify(token, c.env.JWT_SECRET)
        c.set('id', decoded.id)

        await next()
      } catch (error) {
        return c.text('Unauthorized: Invalid token', 401)
      }
  }
  