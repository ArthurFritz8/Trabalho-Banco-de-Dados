import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
export declare class UserController {
    userBusiness: UserBusiness;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=UserController.d.ts.map