import { Pet } from "../types/Pet";
export declare class PetData {
    getPetById(petId: number): Promise<Pet | undefined>;
    getAllPets(): Promise<Pet[]>;
    createPet(name: string, user_id: number): Promise<Pet>;
    updatePet(id: number, name: string, user_id: number): Promise<Pet>;
    deletePet(id: number): Promise<void>;
    getPetsByUserId(userId: number): Promise<Pet[]>;
}
//# sourceMappingURL=PetData.d.ts.map