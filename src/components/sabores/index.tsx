

import cardapio from "./cardapios.json";
import styles from "./Sabores.module.scss";


type Props = typeof cardapio[0];

function Sabores(props: Props) {


    const { nome, foto, descricoes, Grande, Medio, id, categoria } = props;
    return (
        <>
            <section className={styles.cardapio}>
                
                    <div className={styles.cardapio__contImagem}>
                        <div className={styles.cardapio__imagem}>
                            <img src={foto} alt="Imagem Cardapio" />
                        </div>
                    </div>
                    <div className={styles.cardapio__titulo}>
                        <div className={styles.cardapio__descricao}>
                            <h2>{nome}</h2>
                            <p>{descricoes}</p>
                        </div>
                      
                        <div className={styles.cardapio__valores}>
                            <h4> Grande: R$  {Grande}</h4>
                            <h4>Medio: R$ {Medio}</h4>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Sabores;




