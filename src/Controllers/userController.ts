import database from "../Database/database"
import { Request,Response } from "express"

export class UserController{
    public static async getOneUser(req:Request,res:Response){
        const id = req.params.id
        const search_id = parseInt(id)
        const users = await database.users.findUnique({where:{
            id:search_id
        }}).then((response)=>{
            const user = {
                id:response?.id,
                name: response?.name
            }
            res.status(200).send(user)
        }).catch(()=>{
            alert("Dados errados!")
        })   
    }
}