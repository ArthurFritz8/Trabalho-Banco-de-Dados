import { Request, Response } from "express";
import { PetBusiness } from "../business/PetBusiness";
export declare class PetController {
    petBusiness: PetBusiness;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=PetController.d.ts.map