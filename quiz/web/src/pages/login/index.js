import './index.scss'
import { useState, useEffect } from 'react'

import storage from 'local-storage';

import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../apis'
import { toast } from 'react-toastify';
import Header from '../../components/header'

export default function Login() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [avancarpage, setAvancarpage] = useState (false)

    function nAvancar() {
        toast.error("Por favor, preencha todos os campos corretamente");
    }

    async function cadastro(){
        try{
            if (!nome) {
                toast.error("Por favor, preencha o campo 'nome'");
                return; 
            }
            if (id === 0 && !buttonDisabled){
                setButtonDisabled(true);
                const user = await loginUser(nome, email);
                storage('usuario-logado', user)
                console.log(storage())
            }

            setTimeout(() => { 
                navigate('/info');
            }, 3000) 
        }
        
        catch (err){
            if (err.response){
                toast.error(err.response.data.erro)
            }
        }
    }

    return (
        <div id="login">
            <Header/>
            <section className='vinhetafoda'></section>
            <section className='acao'>
                <h1>Fazer Login</h1>
            </section>

            <main className='login'>
                <div className='title'>
                    <h1>Faça seu Cadastro!</h1>
                </div>

                <section className='inserir'>
                    <h1>Insira seus dados</h1>
                    <p>Dessa forma, após você terminar o quiz terá como ver resultado e competir com os demais</p>
                    <input type='text' placeholder='Digite seu nome' required='required' value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type='email' placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)}/>
                </section>
                
                {nome == '' && email == "" &&
                <button onClick={nAvancar} className='loginNfeito'>Coloque seus dados</button>}

                {nome == '' || email == "" &&
                <button onClick={nAvancar} className='loginNfeito'>Coloque seus dados</button>}

                {nome != '' && email != '' &&
                <button className='loginfeito' onClick={cadastro} disabled={buttonDisabled}>Ir</button>}

            </main>
        </div>
    )
}