import { UserData } from "../data/UserData";
import { PetData } from "../data/PetData";
export class UserBusiness {
    constructor() {
        this.userData = new UserData();
        this.petData = new PetData();
    }
    async getUserById(userId) {
        try {
            const user = await this.userData.getUserById(userId);
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllUsers() {
        try {
            const users = await this.userData.getAllUsers();
            return users;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async createUser(name, email) {
        try {
            if (!name || !email) {
                throw new Error("Nome e e-mail são obrigatórios.");
            }
            const existingUser = await this.userData.getUserByEmail(email);
            if (existingUser) {
                throw new Error("E-mail já cadastrado.");
            }
            const newUser = await this.userData.createUser(name, email);
            return newUser;
        }
        catch (error) {
            throw error;
        }
    }
    async updateUser(id, name, email) {
        try {
            if (!name || !email) {
                throw new Error("Nome e e-mail são obrigatórios.");
            }
            const existingUser = await this.userData.getUserById(id);
            if (!existingUser) {
                throw new Error("Usuário não encontrado.");
            }
            const userWithSameEmail = await this.userData.getUserByEmail(email);
            if (userWithSameEmail && userWithSameEmail.id !== id) {
                throw new Error("E-mail já cadastrado por outro usuário.");
            }
            const updatedUser = await this.userData.updateUser(id, name, email);
            return updatedUser;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            const existingUser = await this.userData.getUserById(id);
            if (!existingUser) {
                throw new Error("Usuário não encontrado.");
            }
            const pets = await this.petData.getPetsByUserId(id);
            if (pets.length > 0) {
                throw new Error("Não é possível excluir o usuário, pois ele possui pets vinculados.");
            }
            await this.userData.deleteUser(id);
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=UserBusiness.js.map