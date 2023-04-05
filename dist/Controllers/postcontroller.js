import database from "../Database/database";
export class PostController {
    static async getPosts(req, res) {
        const posts = await database.post.findMany();
        res.status(201).send(posts);
    }
    static async newPost(req, res) {
        const { id, title, content } = req.body;
        const newUser = await database.post.create({ data: {
                author_id: id,
                title,
                content
            } }).then(() => {
            res.status(201).send("Object Created");
        }).catch((err) => console.error(err));
    }
    static async updatePost(req, res) {
        const { title, content } = req.body;
        const id = req.params.id;
        const id_post = parseInt(id);
        const posts = await database.post.update({
            where: {
                id_post: id_post
            }, data: {
                title,
                content
            }
        }).then(() => {
            res.status(200).send("Objeto atualizado!");
        });
    }
    static async deletePost(req, res) {
        const id = req.params.id;
        const id_post = parseInt(id);
        const post = await database.post.delete({
            where: {
                id_post: id_post
            }
        }).then((response) => {
            res.status(202).send("Deleted");
        });
    }
}
//# sourceMappingURL=postcontroller.js.map