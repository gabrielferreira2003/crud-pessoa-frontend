import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import CabecarioPadrao from './componentes/cabecarioMetodos/cabecarioPadrao';

interface IFormData{
    id: number;
    nome: string;
    email: string;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
    id: yup.number().required().positive().integer(),
    nome: yup.string().required().max(50),
    email: yup.string().required().email().max(70),    
})

export default function EditarPessoa(){

    const [idString, setIdString] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function putData(){
        let id = Number(idString)
        formValidationSchema
        .validate({id, nome, email})
        .then(() => {
            axios.put(`https://localhost:7253/api/Pessoa/EditarPessoa`, {
                id,
                nome,
                email
            })
            .then(() => {
                alert("Pessoa editada com sucesso! 😊");
            })
            .catch(erro => {
                console.log("Requisição falho! 😢")
                alert(erro)
            })
        })
        .catch(erro => {
            alert(erro);
        })
    }

    return(
        <div>
            <CabecarioPadrao titulo="Editar Pessoa 😉" url="/" voltar={true}/>

            <div className="espacoFormularios">
                <div className="blocoForm">
                    <div className="conteudoForm">
                        <label>Id</label>
                        <input type="number" placeholder='Id' onChange={(e) => setIdString(e.target.value)}/>
                        <label>Nome</label>
                        <input type="text" placeholder='Nome'  onChange={(e) => setNome(e.target.value)}/>
                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={putData} type="submit">Editar Pessoa</button>
                    </div>
                </div>
            </div>
        </div>
    )
}