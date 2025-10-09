import { connection } from "../dbConnection";
import { Pet } from "../types/Pet";

export class PetData {
    async getPetById(petId: number): Promise<Pet | undefined> {
        try {
            const pet = await connection('pets').where({ id: petId }).first();
            return pet;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getAllPets(): Promise<Pet[]> {
        try {
            const pets = await connection('pets').select();
            return pets;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async createPet(name: string, user_id: number): Promise<Pet> {
        try {
            const [id] = await connection('pets').insert({ name, user_id }).returning('id');
            return { id, name, user_id };
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async updatePet(id: number, name: string, user_id: number): Promise<Pet> {
        try {
            await connection('pets').where({ id }).update({ name, user_id });
            return { id, name, user_id };
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async deletePet(id: number): Promise<void> {
        try {
            await connection('pets').where({ id }).del();
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getPetsByUserId(userId: number): Promise<Pet[]> {
        try {
            const pets = await connection('pets').where({ user_id: userId }).select();
            return pets;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
