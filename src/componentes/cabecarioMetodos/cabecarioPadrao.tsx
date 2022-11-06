import './cabecarioPadrao.css';

interface Props{
    titulo: string;
    url?: string;
    voltar: boolean;
}

export default function cabecarioPadrao(props:Props){
    if (props.voltar){
        return(
            <header>
                <div id="voltarCabecario">
                    <a href={props.url}> <img src="/voltarSeta.png" alt="Voltar" id="imgVoltar" /></a>
                </div>
                <h1 id="tituloCabecario">{props.titulo}</h1>
            </header>
        )
    }
    return(
        <header>
            <h1 id="tituloCabecario">{props.titulo}</h1>
        </header>
    )
}