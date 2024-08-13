import { Hono } from 'hono'
import { authMiddleware } from '../middleware/authMiddleware'
import { getBlogsBulk } from '../controllers/blog/getBlogsBulk'
import { getBlog } from '../controllers/blog/getBlog'
import { addBlog } from '../controllers/blog/addBlog'
import { updateBlog } from '../controllers/blog/updateBlog'

const app = new Hono()

app.get("/bulk",getBlogsBulk)
app.get('/:id',getBlog)
app.post('/',authMiddleware,addBlog)
app.put('/',authMiddleware,updateBlog)

export default app