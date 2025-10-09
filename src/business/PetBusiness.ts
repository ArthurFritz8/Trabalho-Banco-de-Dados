import { PetData } from "../data/PetData";
import { UserData } from "../data/UserData";
import { Pet } from "../types/Pet";

export class PetBusiness {
    petData = new PetData();
    userData = new UserData();

    public async getPetById(petId: number): Promise<Pet | undefined> {
        try {
            const pet = await this.petData.getPetById(petId);
            return pet;
        } catch (error: any) {
            throw error;
        }
    }

    public async getAllPets(): Promise<Pet[]> {
        try {
            const pets = await this.petData.getAllPets();
            return pets;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async createPet(name: string, user_id: number): Promise<Pet> {
        try {
            if (!name) {
                throw new Error("Nome do pet é obrigatório.");
            }
            if (isNaN(user_id)) {
                throw new Error("ID do usuário deve ser um número.");
            }

            const userExists = await this.userData.getUserById(user_id);
            if (!userExists) {
                throw new Error("user_id inválido.");
            }

            const newPet = await this.petData.createPet(name, user_id);
            return newPet;
        } catch (error: any) {
            throw error;
        }
    }

    public async updatePet(id: number, name: string, user_id: number): Promise<Pet> {
        try {
            if (!name) {
                throw new Error("Nome do pet é obrigatório.");
            }
            if (isNaN(user_id)) {
                throw new Error("ID do usuário deve ser um número.");
            }

            const petExists = await this.petData.getPetById(id);
            if (!petExists) {
                throw new Error("Pet não encontrado.");
            }

            const userExists = await this.userData.getUserById(user_id);
            if (!userExists) {
                throw new Error("user_id inválido.");
            }

            const updatedPet = await this.petData.updatePet(id, name, user_id);
            return updatedPet;
        } catch (error: any) {
            throw error;
        }
    }

    public async deletePet(id: number): Promise<void> {
        try {
            const petExists = await this.petData.getPetById(id);
            if (!petExists) {
                throw new Error("Pet não encontrado.");
            }
            await this.petData.deletePet(id);
        } catch (error: any) {
            throw error;
        }
    }
}
