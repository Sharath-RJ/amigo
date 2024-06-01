import { adminUseCase } from "../../app/useCases/admin";
import { Request, Response } from "express"

export class adminController {
    constructor(private _adminusecase: adminUseCase) {}

    async getAllUsers(req: Request, res: Response): Promise<any> {
        try {
            const users = await this._adminusecase.getAllUsers()
            if (users) res.json(users)
        } catch (error) {
            console.log(error)
        }
    }

    async blockUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params
            const user = await this._adminusecase.blockUser(id)
            if (user) res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async unblockUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params
            const user = await this._adminusecase.unblockUser(id)
            if (user) res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async publishPost(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const post = await this._adminusecase.publishPost(id)
            if (post) {
                res.status(200).json(post)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getPostDetails(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const post = await this._adminusecase.getPostDetails(id)
            if (post) {
                res.status(200).json(post)
            }
        } catch (error) {
            console.log(error)
        }
    }
}