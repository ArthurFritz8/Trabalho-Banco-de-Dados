import { UserData } from "../data/UserData";
import { PetData } from "../data/PetData";
import { User } from "../types/User";
export class UserBusiness {
    userData = new UserData();
    petData = new PetData();

    public async getUserById(userId: number): Promise<User | null> {
        try {
            const user = await this.userData.getUserById(userId);
            return user;
        } catch (error: any) {
            throw error;
        }
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await this.userData.getAllUsers();
            return users;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async createUser(name: string, email: string): Promise<User> {
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
        } catch (error: any) {
            throw error;
        }
    }

    public async updateUser(id: number, name: string, email: string): Promise<User> {
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
        } catch (error: any) {
            throw error;
        }
    }

    public async deleteUser(id: number): Promise<void> {
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
        } catch (error: any) {
            throw error;
        }
    }
}
