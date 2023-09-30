import axios from "axios";

const api = axios.create({ 
    baseURL: 'http://localhost:5000'   
})            


export async function BuscarPorID(id) {
    try {
      const resposta = await api.get(`/user/${id}`);
      return resposta.data; // dados do usuário uhuhuhuhu
    } catch (error) {
      console.error("Erro ao buscar usuário por ID:", error);
      return null; // Retorna null em caso de erro ebababa
    }
  }
  
export async function ListarTodosUsers(){
    const resposta = await api.get(`/listar`);
    return resposta.data
}
////////////////////////////////////////////////////////

export async function loginUser(nome, email){

  const r = await api.post('/user/cadastro', {
       nome: nome,
       email: email
      });
     
      return r.data;
  }

export async function PontosAcertos(id, acertos, pontos){
  const resposta = await api.put(`/user/${id}`, {
    acertos: acertos,
    pontos: pontos
  })
  return resposta.data
}