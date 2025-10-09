import { connection } from "../dbConnection";
export class PetData {
    async getPetById(petId) {
        try {
            const pet = await connection('pets').where({ id: petId }).first();
            return pet;
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getAllPets() {
        try {
            const pets = await connection('pets').select();
            return pets;
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async createPet(name, user_id) {
        try {
            const [id] = await connection('pets').insert({ name, user_id }).returning('id');
            return { id, name, user_id };
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async updatePet(id, name, user_id) {
        try {
            await connection('pets').where({ id }).update({ name, user_id });
            return { id, name, user_id };
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async deletePet(id) {
        try {
            await connection('pets').where({ id }).del();
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getPetsByUserId(userId) {
        try {
            const pets = await connection('pets').where({ user_id: userId }).select();
            return pets;
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
//# sourceMappingURL=PetData.js.map