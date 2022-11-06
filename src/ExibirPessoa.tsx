import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import CabecarioPadrao from './componentes/cabecarioMetodos/cabecarioPadrao';

interface IFormData{
    idString: number;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
    idString: yup.number().required().positive().integer(),
})

export default function ExibirPessoa(){

    const [idString, setIdString] = useState('');

    function buscarPessoa(){
        formValidationSchema
        .validate({idString})
        .then(() => {
            window.location.href = `/ExibirPessoa/${idString}`;
        })
        .catch(erro => {
            alert(erro);
        })        
    }

    return(
        <div>
            <CabecarioPadrao titulo="Exibir Pessoa ✨" url="/" voltar={true}/>

            <div className="espacoFormularios">
                <div className="blocoForm">
                    <div className="conteudoForm">
                        <label>Id</label>
                        <input type="number" placeholder='Id' onChange={(e) => setIdString(e.target.value)}/>
                        <button onClick={buscarPessoa}>Buscar Passoa</button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}