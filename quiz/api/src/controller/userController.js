import { inserir, alterar, listarTodos, buscarPorID} from '../repository/userRepository.js';


import { Router } from 'express';
const server = Router();

server.post('/user/cadastro', async (req, resp) => {
    try{
        const UserParaInserir = req.body 

        if(!UserParaInserir.nome)
            throw new Error('Seu nome inserido deve ser obrigatorio');

        if(!UserParaInserir.email)
        throw new Error('Seu email inserido deve ser obrigatorio');

        const RepositoryInsertUser = await inserir(UserParaInserir);
       
        resp.send(RepositoryInsertUser);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/user/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const user = req.body 

        if(!user.acertos)
            throw new Error('Seu nome inserido deve ser obrigatorio');

        if(!user.pontos)
        throw new Error('Seu email inserido deve ser obrigatorio');

        if(!user.usuario)
        throw new Error('Usuario não logado!')

        const resposta = await alterar(id, user);

        if(resposta != 1)
        throw new Error('Não pode ser alterado!');

        else
            resp.status(204).send();
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/listar', async (req, resp) => {
    try{
        const resposta = await listarTodos();
        resp.send(resposta);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/user/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const resposta = await buscarPorID(id);

        if(!resposta){
            throw new Error('Usuario Não Encontrado!!!')
        }
        resp.send(resposta);
    }

    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;