import { PetData } from "../data/PetData";
import { UserData } from "../data/UserData";
import { Pet } from "../types/Pet";
export declare class PetBusiness {
    petData: PetData;
    userData: UserData;
    getPetById(petId: number): Promise<Pet | undefined>;
    getAllPets(): Promise<Pet[]>;
    createPet(name: string, user_id: number): Promise<Pet>;
    updatePet(id: number, name: string, user_id: number): Promise<Pet>;
    deletePet(id: number): Promise<void>;
}
//# sourceMappingURL=PetBusiness.d.ts.map