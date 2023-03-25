
import cardapio from "../sabores/cardapios.json";

import styles from "../PratosMenu/PratosMenu.module.scss";

function PratosMenus() {

    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 4);
    return (
        <>
        <div className={styles.titulo}>
            <h2 className={styles.titulo__pratosDaCasa}>Nossos Pratos da Casa</h2>
        </div>
            <div className={styles.pratosMenu}>
                {pratosRecomendados.map((pratoRec) => (
                    <div className={styles.pratosMenu__prato}>
                        <img src={pratoRec.foto} alt="Imagem do Prato" />
                        <div className={styles.pratosMenu__botao}>
                            <button>Ver mais</button>
                        </div>
                    </div>
                ))}

            </div>

        </>
    );
}

export default PratosMenus;

