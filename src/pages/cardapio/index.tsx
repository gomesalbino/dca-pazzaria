import Pesquisar from "components/Pesquisar";
import { SetStateAction, useState } from "react";
import Sabores from "../../components/sabores";
import cardapio from "../../components/sabores/cardapios.json";

import filtros from "../../components/FiltrarCategorias/filtros.json";

import styles from "./Cardapio.module.scss";

import { useEffect } from "react";
import FiltrarCategoria from "components/FiltrarCategorias";
import OpcaoSelecionar from "components/OpcaoSelelcionar";

type IOpcao = typeof filtros[0];

interface Props {
    busca: string,
    escolha: string
   
    filtro: string
    
}


function Cardapio(props: Props) {

    const [busca, setBusca] = useState("");


    const [filtro, setFiltro] = useState<number | null>(null)

    const [listas, setLista] = useState(cardapio);

    const [escolha, setEscolha] = useState("");


    function testaBusca(nome: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(nome);
    }

    function ordenar(novaLista: typeof cardapio){
        switch(escolha){

            case 'precos':
                return novaLista.sort((a, b) => a.Grande > b.Grande ? 1 : - 1);
            
            default:
               return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.nome) && testaFiltros(item.categoria.id))
        setLista(ordenar((novaLista)))
    }, [busca, filtro, escolha])



  
    function testaFiltros(id: number){
     if(filtro !== null) return filtro === id
     return true
    }
 

    return (
        <>
        <div>
            <FiltrarCategoria filtro={filtro} setFiltro={setFiltro} />
        </div>
            <div>
                <Pesquisar busca={busca} setBusca={setBusca} />
            </div>
            <div>
                <OpcaoSelecionar escolha={escolha} setEscolha={setEscolha} />
            </div>
            <div className={styles.cardapio}>
                {
                    listas.map(lista =>
                    (
                        <div key={lista.id}>
                            <Sabores key={lista.id}
                                nome={lista.nome}
                                foto={lista.foto}
                                descricoes={lista.descricoes}
                                Grande={lista.Grande}
                                Medio={lista.Medio}
                                categoria={lista.categoria}
                                id={lista.id}

                            />
                        </div>)
                    )
                }
            </div>
        </>
    );
}

export default Cardapio;



