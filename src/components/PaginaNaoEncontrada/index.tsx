
import styles from "./PaginaNaoEncontrada.module.scss";

import not_found from "assets/not_found.svg";
import { useNavigate } from "react-router-dom";

function PaginaNaoEncontrada() {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.centro}>
                <div className={styles.botao}>
                    <button className={styles.botaoVoltar}
                        onClick={() => navigate(-1)}
                    >
                        {'Voltar'}
                    </button>
                </div>
                <div className={styles.imagemNot}>
                    <img src={not_found} alt="Imagem pagina não encontrada!" />
                </div>
            </div>

        </>
    );
}

export default PaginaNaoEncontrada;

