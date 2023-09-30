import './index.scss'

import { BuscarPorID, ListarTodosUsers } from '../../apis/'

import { useState, useEffect} from 'react';

import Header from '../../components/header'

export default function Home () {

    const [usuarios, setusuarios] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function filtrar(){  
        const resposta = await BuscarPorID(filtro);
        setusuarios(resposta)
    }

    async function Enter(event) {
        if (event.key === "Enter") {
            const resposta = await BuscarPorID(filtro);
            setusuarios(resposta)
        }
      }

      async function CarregarUsuarios(){
        const resposta = await ListarTodosUsers();
        setusuarios(resposta);
        console.log(resposta)
      }

      useEffect(() => {
        CarregarUsuarios();
      }, [])

    return(
        <div id="Home">
            <Header/>
            <section className='CardResp'>
                <div className='titulo'>
                    <h1>Respostas</h1>
                </div>
                <div className='bem-vindo'>
                    <p>
                    Bem-vindo ao nosso Quiz do Frei! Estamos felizes por você estar aqui. Prepare-se para diversão e aprendizado enquanto celebramos o frei. Não importa o seu nível de conhecimento, todos são bem-vindos. Vamos nos divertir e aprender juntos! Boa sorte! 
                    </p>
                </div>

                <div className='procurar'>
                    <input type='number' placeholder='Procurar usuario por id' value={filtro} onChange={e => setFiltro(e.target.value)}  onKeyDown={Enter}/>
                    <button onClick={filtrar}>Procurar</button>
                </div>

                <section className='respostas'>
                    <div id='respostas'>

                        <div className='estatisticas'>
                            <div className='resultado a'>
                                <h1>Nome</h1>
                            </div>
                            <div className='resultado b'>
                                <h1>Id</h1>
                                <h1>Acertos</h1>
                                <h1>Pontos</h1>
                            </div>
                        </div>

                        <div className='result'>

                        <section className='resposta'>
                        {usuarios.length > 0 ? (
                            usuarios.map(item => (
                            <div className='resultado' key={item.id}>
                                <div className='resultadoa'>
                                    <h1>{item.nome}</h1>
                                </div>
                                <div className='results'>

                                        <p>{item.id}</p>
                                 
                                        <p>{item.acertos}</p>
                                 
                                        <p>{item.pontos}</p>
                                </div>
                            </div>
                            ))
                        ) : (
                            <p>Nenhum usuário encontrado.</p>
                        )}
                        </section>
                        </div>

                    </div>
                </section>
                <nav className='Iniciar'>
                    <button><a href='http://localhost:3000/login'>Iniciar Quiz</a></button>
                </nav>
            </section>

            <nav className='vinhetafds'></nav>
        </div>
    )
}

