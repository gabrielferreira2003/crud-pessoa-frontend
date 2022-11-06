import './botoesHome.css';

interface Props{
    texto: string;
    url: string;
}

export default function botoesHome(props:Props){
    return(
        <a href={props.url}>
            <div id="botao-criar-pessoa">
                <p>{props.texto}</p>
            </div>
        </a>
    )
}