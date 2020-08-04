import express from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';



const routes = express.Router();
    //GET: Buscar ou listar uma informação
    //POST: Criar uma nova informação
    //PUT: Atualizar uma informação existente
    //DELETE: Deletar uma informação existente

    //Corpo (Request Body): Dados para criação ou atualização de um registro
    //Route Params: Identificar qual recurso eu quero atualizar ou deletar
    //Query Params: Paginação, filtros, ordenação

const classesControllers = new ClassesControler();
const connectionsControllers = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;