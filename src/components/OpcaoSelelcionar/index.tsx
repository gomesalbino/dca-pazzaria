import { useState } from "react";
import styles from "./OpcaoSelecionar.module.scss";

import selecionar from "./selecionar.json";
import classNames from "classnames";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";



interface Props{
    escolha: string,
    setEscolha: React.Dispatch<React.SetStateAction<string>>;
}


function OpcaoSelecionar({escolha, setEscolha}: Props) {

    const [aberto, setAberto] = useState(false);

    const nomeSelecionado = escolha && selecionar.find((opcao) =>(opcao.valor === escolha))?.nome

    return (
        <>

            <div>
                <button className={classNames({
                    [styles.selecioneOpcao]: true,
                    [styles["selecioneOpcao--ativo"]]: escolha !== ""
                })}
                
                onClick={() => setAberto(!aberto)}
                onBlur={() => setAberto(false)}>
               
                <span>{nomeSelecionado || "Selecione Por"}</span>
                {aberto ? (<MdKeyboardArrowUp size={25} />) : (<MdKeyboardArrowDown size={25} />)}
                
                <div
                className={classNames({
                    
                        [styles.selecioneOpcao__opcoes]: true,
                        [styles["selecioneOpcao__opcoes--ativo"]]: aberto,
                })}
                >
               
                    {selecionar.map((opcao) => (
                        <div className={styles.selecioneOpcao__escolha} key={opcao.valor}
                        onClick={() =>setEscolha(opcao.valor)}
                        >
                            {opcao.nome}
                        </div>
                    ))}
                    </div>
                </button>
            </div>
        </>
    );
}

export default OpcaoSelecionar;




