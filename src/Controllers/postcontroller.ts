import { Request, Response } from "express";

import database from "../Database/database";

export class PostController {
    public  static async getPosts(req:Request,res:Response) {
        const posts = await database.post.findMany()
        res.status(201).send(posts)
    }

    public static async newPost(req:Request,res:Response){
        const {id,title,content} = req.body

        const newUser = await database.post.create({data:{
            author_id:id,
            title:title,
            content:content
        }}).then((Response)=>{
            res.status(201).send("Object Created")
        }).catch((err)=>console.error(err))
    }
    public static async updatePost(req:Request,res:Response){
        const { title,content} = req.body
        const id = req.params.id
        const id_post = parseInt(id)
        const posts = await database.post.update({
            where:{
            id_post:id_post
        },data:{
            title: title,
            content:content
        }}).then((response)=>{
            res.status(200).send("Objeto atualizado!")
        })
    }

    public static async deletePost(req:Request,res:Response){
        const id = req.params.id
        const id_post = parseInt(id)
        const post = await database.post.delete({
            where:{
            id_post: id_post
        }}).then((response)=>{
            res.status(202).send("Deleted")
        })
    }
}