import { Request, Response } from "express";
import { z } from "zod";

import database from "../Database/database";

export class PostController {
    public  static async getPosts(req:Request,res:Response) {
        const posts = await database.post.findMany()
        res.status(201).send(posts)
    }

    public static async newPost(req:Request,res:Response){
        try {
        const data = z.object({
            id:z.number(),
            title: z.string().max(30),
            content: z.string().max(400)
        })
        data.parse(req.body)
        } catch {
            res.send("Algum campo está errado!")
        }
        const {id,title,content} = req.body

        const newUser = await database.post.create({data:{
            author_id:id,
            title,
            content
        }}).then(()=>{
            res.status(201).send("Object Created")
        }).catch(()=>res.status(401).send("Não foi capaz de criar um post"))
    }

    public static async updatePost(req:Request,res:Response){
       try{
        const data = z.object({
            title: z.string().max(30),
            content: z.string().max(400)
        })
        data.parse(req.body)
         } catch {
            res.send("Algum campo está errado")
        }
        const { title,content } = req.body
        const id_post = parseInt(req.params.id)
        const posts = await database.post.update({
            where:{
            id_post:id_post
        },data:{
            title,
            content
        }}).then(()=>{
            res.status(200).send("Objeto atualizado!")
        })
    }

    public static async deletePost(req:Request,res:Response){
        const id_post = parseInt(req.params.id)   
        const post = await database.post.delete({
            where:{
            id_post
        }}).then(()=>{
            res.status(202).send("Deleted")
        })
    }
}