import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response ) => {
    res.send('teste')
}
export const add = async (req: Request, res: Response ) => {
    res.send('add')
}
export const update = async (req: Request, res: Response ) => {
    res.send('update')
}
export const remove = async (req: Request, res: Response ) => {
    res.send('remove')
}