import { UserData } from "../data/UserData";
import { PetData } from "../data/PetData";
import { User } from "../types/User";
export declare class UserBusiness {
    userData: UserData;
    petData: PetData;
    getUserById(userId: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    createUser(name: string, email: string): Promise<User>;
    updateUser(id: number, name: string, email: string): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
//# sourceMappingURL=UserBusiness.d.ts.map