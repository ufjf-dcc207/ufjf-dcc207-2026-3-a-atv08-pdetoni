import "./ListagemDePacotes.css"
import Pacote from "./Pacote";
import { useState, type ChangeEvent } from 'react'
import type { PacoteType } from "./types"

type ListagemDePacotesProps={
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: string)=>void;

}

type CampoOrdenacao = "peso" | "altura" | "largura" | "profundidade";

export default function ListagemDePacotes({pacotes, acaoExcluir}:ListagemDePacotesProps){

    const [ordenacao, setOrdenacao] = useState<CampoOrdenacao>("peso");

    function mudaOrdenacao(evento: ChangeEvent<HTMLSelectElement>){
        setOrdenacao(evento.target.value as CampoOrdenacao);
    }

    return (
        <div>
            <div>Ordenar por: {ordenacao}
                <select onChange={mudaOrdenacao}>
                    <option value="peso">peso</option>
                    <option value="altura">altura</option>
                    <option value="largura">largura</option>
                    <option value="profundidade">profundidade</option>
                </select>
            </div>
            <dl>
                {pacotes
                    .sort((x,y)=>y[ordenacao]-x[ordenacao])
                    .map(p=>(
                        <Pacote pacote={p} key={p.id} acaoExcluir={acaoExcluir}/>
                    ))}
            </dl>
        </div>
    )
}