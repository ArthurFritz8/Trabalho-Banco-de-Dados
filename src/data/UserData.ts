import { connection } from "../dbConnection";
export class UserData {
    async getUserById(userId: Number) {
        try {
            const user = await connection('users').where({ id: userId }).first();
            return user;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getAllUsers() {
        try {
            const users = await connection('users').select();
            return users;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async createUser(name: string, email: string) {
        try {
            const [id] = await connection('users').insert({ name, email }).returning('id');
            return { id, name, email };
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getUserByEmail(email: string) {
        try {
            const user = await connection('users').where({ email }).first();
            return user;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async updateUser(id: number, name: string, email: string) {
        try {
            await connection('users').where({ id }).update({ name, email });
            return { id, name, email };
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async deleteUser(id: number) {
        try {
            await connection('users').where({ id }).del();
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
