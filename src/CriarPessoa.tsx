import { useState } from 'react';
import axios from 'axios';
import CabecarioPadrao from './componentes/cabecarioMetodos/cabecarioPadrao';
import * as yup from 'yup';
import './CriarPessoa.css';

interface IFormData{
    nome: string;
    email: string;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
    nome: yup.string().required().max(50),
    email: yup.string().required().email(),
})


export default function CriarPessoa(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function postData(){
        formValidationSchema
        .validate({nome, email})
        .then(() => {
            axios.post(`https://localhost:7253/api/Pessoa/AdicionarPessoa`, {
                nome,
                email
            })
            .then(() => {
                alert("Pessoa cadastrada com sucesso! 😊");
            })
            .catch(erro => {
                console.log("Requisição falho! 😢");
                alert(erro);
            })
        })
        .catch(erro => {
            alert(erro);
        })
    }

    return(
        <>
            <CabecarioPadrao titulo="Criar Pessoa 😀" url="/" voltar={true} />

            <div className="espacoFormularios">
                <div className="blocoForm">
                    <div className="conteudoForm">
                        <label>Nome</label>
                        <input type="text" placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
                        <label>E-mail</label>
                        <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>

                        <button onClick={postData} type='submit'>Criar Pessoa</button>
                    </div>
                </div>
            </div>
        </>
    )
}