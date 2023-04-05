import database from "../Database/database";
export class UserController {
    static async getOneUser(req, res) {
        const id = req.params.id;
        const search_id = parseInt(id);
        const users = await database.users.findUnique({ where: {
                id: search_id
            } }).then((response) => {
            const user = {
                id: response?.id,
                name: response?.name
            };
            res.status(200).send(user);
        }).catch(() => {
            alert("Dados errados!");
        });
    }
}
//# sourceMappingURL=userController.js.map