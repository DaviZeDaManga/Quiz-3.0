import { conx } from "./conection.js";

export async function inserir (user){ 
    const comando = `INSERT INTO tb_usuario (nm_nome, ds_email)
	VALUES	(?, ?);
 `

    const [rensposta] = await conx.query(comando, [user.nome, user.email]);
    user.id = rensposta.insertId; 
    
    return user;
}

export async function alterar(id, user){
    const comando =`
    UPDATE tb_usuario
  SET nr_acertos = ?,
	  nr_pontos = ?
WHERE id_usuario = ?;`
    const [resposta] = await conx.query(comando, [user.acertos, user.pontos, id]);
    return resposta.affectedRows;
}

export async function listarTodos(){ 
    const comando = `
    SELECT id_usuario	id,
    nm_nome		nome,
    nr_acertos   acertos,
    nr_pontos	pontos
FROM tb_usuario
ORDER BY nr_pontos;`

    const [linhas] = await conx.query(comando) 
    return linhas;
};

export async function buscarPorID(id){
    const comando = `
    SELECT id_usuario	id,
    nm_nome		nome,
    nr_acertos   acertos,
    nr_pontos	pontos
FROM tb_usuario
WHERE id_usuario = ?;`;
    const [linhas] = await conx.query(comando, [id]);
    return linhas;
};
