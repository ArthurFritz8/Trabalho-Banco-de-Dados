import { UserBusiness } from "../business/UserBusiness";
export class UserController {
    constructor() {
        this.userBusiness = new UserBusiness();
        this.getById = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id || isNaN(Number(id))) {
                    return res.status(400).json({ error: 'ID do usuário é obrigatório e deve ser um número' });
                }
                const idNumber = Number(id);
                const user = await this.userBusiness.getUserById(idNumber);
                if (!user) {
                    return res.status(404).json({ error: 'Usuário não encontrado' });
                }
                res.status(200).send(user);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getAll = async (req, res) => {
            try {
                const users = await this.userBusiness.getAllUsers();
                res.status(200).send(users);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.create = async (req, res) => {
            try {
                const { name, email } = req.body;
                const newUser = await this.userBusiness.createUser(name, email);
                res.status(201).send(newUser);
            }
            catch (error) {
                if (error.message === "E-mail já cadastrado.") {
                    return res.status(409).send({ error: error.message });
                }
                if (error.message === "Nome e e-mail são obrigatórios.") {
                    return res.status(400).send({ error: error.message });
                }
                res.status(500).send({ error: error.message });
            }
        };
        this.update = async (req, res) => {
            try {
                const id = req.params.id;
                const { name, email } = req.body;
                if (!id || isNaN(Number(id))) {
                    return res.status(400).json({ error: 'ID do usuário é obrigatório e deve ser um número' });
                }
                const updatedUser = await this.userBusiness.updateUser(Number(id), name, email);
                res.status(200).send(updatedUser);
            }
            catch (error) {
                if (error.message === "Usuário não encontrado.") {
                    return res.status(404).send({ error: error.message });
                }
                if (error.message === "Nome e e-mail são obrigatórios.") {
                    return res.status(400).send({ error: error.message });
                }
                if (error.message === "E-mail já cadastrado por outro usuário.") {
                    return res.status(409).send({ error: error.message });
                }
                res.status(500).send({ error: error.message });
            }
        };
        this.delete = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id || isNaN(Number(id))) {
                    return res.status(400).json({ error: 'ID do usuário é obrigatório e deve ser um número' });
                }
                await this.userBusiness.deleteUser(Number(id));
                res.status(204).send();
            }
            catch (error) {
                if (error.message === "Usuário não encontrado.") {
                    return res.status(404).send({ error: error.message });
                }
                if (error.message === "Não é possível excluir o usuário, pois ele possui pets vinculados.") {
                    return res.status(409).send({ error: error.message });
                }
                res.status(500).send({ error: error.message });
            }
        };
    }
}
//# sourceMappingURL=UserController.js.map