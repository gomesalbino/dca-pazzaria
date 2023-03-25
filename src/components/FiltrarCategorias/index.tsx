
import filtros from "./filtros.json";

import styles from "./FiltraCategoria.module.scss";

import classNames from "classnames";


type IOpcao = typeof filtros[0];

interface Props{
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction< number | null>>

}

function FiltrarCategoria({filtro, setFiltro}: Props){

    function selecionarFiltro(opcao: IOpcao){
        if(filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
   }
   

    return ( 
       <>
         <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={classNames({
                    [styles.filtros__botoa]: true,
                    [styles["filtros__botoa--ativo"]]: filtro === opcao.id
                })

                } 
                key={opcao.id}
                 onClick={()=> selecionarFiltro(opcao)}
                 
                 >
                    {opcao.grupo}
                </button>
            ))}
        </div>
       </>
     );
}

export default FiltrarCategoria;



