
import {con} from './connection.js'

import { Router } from 'express'
const server = Router();

export async function inserirPet(pet){
    const comando =
    `INSERT INTO tb_pet(nm_pet)
    VALUES ( ? )`;
    const [respostas] = await con.query(comando[pet.nome])
    pet.id= respostas.insertId;

    return pet;
}

export async funcion listarPets()


export default server;