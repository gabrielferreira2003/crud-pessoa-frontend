import CabecarioPadrao from './componentes/cabecarioMetodos/cabecarioPadrao';
import BotoesHome from './componentes/botaoHome/botoesHome';
import './Home.css';

export default function teste(){
    return(
        <>
            <CabecarioPadrao titulo="Crud de Pessoas 😊" voltar={false}/>
            <div id="blocoBotoes">  
                
                <div id="botao1">
                    <BotoesHome texto='Criar Pessoa' url="/CriarPessoa"/>
                </div>

                <div id="botao2">
                    <BotoesHome texto='Editar Pessoa' url="/EditarPessoa"/>
                </div>

                <div id="botao3">
                    <BotoesHome texto='Excluir Pessoa' url="/ExcluirPessoa"/>
                </div>

                <div id="botao4">
                    <BotoesHome texto='Exibir Pessoa' url="/ExibirPessoa"/>
                </div>
            </div>
        </>
    );
}