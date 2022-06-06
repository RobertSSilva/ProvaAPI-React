import 'dotenv/config'

import Controller from './controller/Controller.js';
import Controller from './controller/Controller.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());;


//configuração dos endpoints
server.use(Controller);
server.use(Controller);




server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));