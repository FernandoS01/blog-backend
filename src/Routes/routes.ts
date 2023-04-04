import Express from 'express'
import { PostController } from '../Controllers/postcontroller';
import { UserController } from '../Controllers/userController';

const routes = Express.Router()

routes.get('/posts',PostController.getPosts);
routes.post('/posts',PostController.newPost);
routes.put('/posts/:id',PostController.updatePost)
routes.delete('/posts/:id',PostController.deletePost)

routes.get('/users/:id',UserController.getOneUser)

export default routes;