import { connection } from "../dbConnection";
export class UserData {
    async getUserById(userId) {
        try {
            const user = await connection('users').where({ id: userId }).first();
            return user;
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getAllUsers() {
        try {
            const users = await connection('users').select();
            return users;
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async createUser(name, email) {
        try {
            const [id] = await connection('users').insert({ name, email }).returning('id');
            return { id, name, email };
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await connection('users').where({ email }).first();
            return user;
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async updateUser(id, name, email) {
        try {
            await connection('users').where({ id }).update({ name, email });
            return { id, name, email };
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async deleteUser(id) {
        try {
            await connection('users').where({ id }).del();
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
//# sourceMappingURL=UserData.js.map