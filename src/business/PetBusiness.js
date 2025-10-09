import { PetData } from "../data/PetData";
import { UserData } from "../data/UserData";
export class PetBusiness {
    constructor() {
        this.petData = new PetData();
        this.userData = new UserData();
    }
    async getPetById(petId) {
        try {
            const pet = await this.petData.getPetById(petId);
            return pet;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllPets() {
        try {
            const pets = await this.petData.getAllPets();
            return pets;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async createPet(name, user_id) {
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
        }
        catch (error) {
            throw error;
        }
    }
    async updatePet(id, name, user_id) {
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
        }
        catch (error) {
            throw error;
        }
    }
    async deletePet(id) {
        try {
            const petExists = await this.petData.getPetById(id);
            if (!petExists) {
                throw new Error("Pet não encontrado.");
            }
            await this.petData.deletePet(id);
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=PetBusiness.js.map