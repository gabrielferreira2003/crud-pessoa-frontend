import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import CabecarioPadrao from './componentes/cabecarioMetodos/cabecarioPadrao';

interface IFormData{
    idString: number;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
    idString: yup.number().required().positive().integer(),
})

export default function ExcluirPessoa(){

    const [idString, setIdString] = useState('');
    
    function deleteData(){
        formValidationSchema
        .validate({idString})
        .then(() => {
            axios.delete(`https://localhost:7253/api/Pessoa/ExcluirPessoa/id?Id=${idString}`)
            .then(() => {
                alert("Pessoa excluida com sucesso! 😊")
            })
            .catch(erro => {
                alert("Requisição falho! 😢")
                console.log(erro)
            })
        })
        .catch(erro => {
            alert(erro)
            console.log(erro);
        })        
    }

    return(
        <div>
            <CabecarioPadrao titulo="Excluir Pessoa 💥" url="/" voltar={true}/>

            <div className="espacoFormularios">
                <div className="blocoForm">
                    <div className="conteudoForm">
                        <label>Id</label>
                        <input type="number" placeholder='Id' onChange={(e) => setIdString(e.target.value)}/>
                        <Button onClick={deleteData} type="submit">Excluir Passoa</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}