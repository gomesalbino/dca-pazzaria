import { SetStateAction } from "react";
import styles from "./Pesquisar.module.scss";
import { CgSearch } from "react-icons/cg";
import cardapio from "../sabores/cardapios.json";
import { useEffect } from "react";
import { useState } from "react";


interface Props {
    busca: string;
    setBusca: React.Dispatch<SetStateAction<string>>;
}



function Pesquisar({ busca, setBusca }: Props) {

  
    return (
        <>
            <div className={styles.inputPesquisa}>
                <input type="text"
                    value={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                    placeholder="Digite sua pesquisa"
                    autoFocus
                />
                <CgSearch size={30} color="#fff"  className={styles.loopa}/>
            </div>
        </>
    );
}

export default Pesquisar;


