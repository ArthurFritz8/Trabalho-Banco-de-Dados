import { Request, Response } from "express";
import { PetBusiness } from "../business/PetBusiness";

export class PetController {
    petBusiness = new PetBusiness();

    public getById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            if (!id || isNaN(Number(id))) {
                return res.status(400).json({ error: 'ID do pet é obrigatório e deve ser um número.' });
            }
            const pet = await this.petBusiness.getPetById(Number(id));
            if (!pet) {
                return res.status(404).json({ error: 'Pet não encontrado.' });
            }
            res.status(200).send(pet);
        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }
    };

    public getAll = async (req: Request, res: Response) => {
        try {
            const pets = await this.petBusiness.getAllPets();
            res.status(200).send(pets);
        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }
    };

    public create = async (req: Request, res: Response) => {
        try {
            const { name, user_id } = req.body;

            if (!name) {
                return res.status(400).json({ error: 'Nome do pet é obrigatório.' });
            }
            if (isNaN(Number(user_id))) {
                return res.status(400).json({ error: 'user_id deve ser um número.' });
            }

            const newPet = await this.petBusiness.createPet(name, Number(user_id));
            res.status(201).send(newPet);
        } catch (error: any) {
            if (error.message === "user_id inválido.") {
                return res.status(400).send({ error: error.message });
            }
            res.status(500).send({ error: error.message });
        }
    };

    public update = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { name, user_id } = req.body;

            if (!id || isNaN(Number(id))) {
                return res.status(400).json({ error: 'ID do pet é obrigatório e deve ser um número.' });
            }
            if (!name) {
                return res.status(400).json({ error: 'Nome do pet é obrigatório.' });
            }
            if (isNaN(Number(user_id))) {
                return res.status(400).json({ error: 'user_id deve ser um número.' });
            }

            const updatedPet = await this.petBusiness.updatePet(Number(id), name, Number(user_id));
            res.status(200).send(updatedPet);
        } catch (error: any) {
            if (error.message === "Pet não encontrado.") {
                return res.status(404).send({ error: error.message });
            }
            if (error.message === "user_id inválido.") {
                return res.status(400).send({ error: error.message });
            }
            res.status(500).send({ error: error.message });
        }
    };

    public delete = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            if (!id || isNaN(Number(id))) {
                return res.status(400).json({ error: 'ID do pet é obrigatório e deve ser um número.' });
            }
            await this.petBusiness.deletePet(Number(id));
            res.status(204).send();
        } catch (error: any) {
            if (error.message === "Pet não encontrado.") {
                return res.status(404).send({ error: error.message });
            }
            res.status(500).send({ error: error.message });
        }
    };
}
