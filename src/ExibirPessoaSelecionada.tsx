import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import CabecarioPadrao from "./componentes/cabecarioMetodos/cabecarioPadrao";
import './ExibirPessoaSelecionada.css';


export default function ExibirPessoaSelecionada(){
    const paramentros = useParams();

    const [APIData, setAPIData] = useState<string | any>('');

    useEffect(() => {
        axios.get(`https://localhost:7253/api/Pessoa/ExibirPessoa?Id=${paramentros.id}`)
            .then(response => {
                setAPIData(response.data);
            })
            .catch(erro => {
                console.log(erro)
                alert("Pessoa não encontrada! 😢");
            })
    }, [paramentros])

    return(
        <div>
            <CabecarioPadrao titulo="Exibir Pessoa ✨" url="/ExibirPessoa" voltar={true}/>

            <div className="espacoFormularios">
                <div className="blocoForm">
                <h1 className="dadosApiH1">Pessoa Selecionada</h1>
                    <div className="conteudoPessoaApi">
                        <p className="dadosApi">Id: {APIData.id}</p>
                        <p className="dadosApi">Nome: {APIData.nome}</p>
                        <p className="dadosApi">Email: {APIData.email}</p>
                        <p className="dadosApi">Data de cadastro: {APIData.data}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}