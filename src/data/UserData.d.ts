export declare class UserData {
    getUserById(userId: Number): Promise<any>;
    getAllUsers(): Promise<any[]>;
    createUser(name: string, email: string): Promise<{
        id: any;
        name: string;
        email: string;
    }>;
    getUserByEmail(email: string): Promise<any>;
    updateUser(id: number, name: string, email: string): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    deleteUser(id: number): Promise<void>;
}
//# sourceMappingURL=UserData.d.ts.map