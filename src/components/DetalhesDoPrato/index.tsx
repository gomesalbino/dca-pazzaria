
import cardapio from "../sabores/cardapios.json";

type Props = typeof cardapio[0];

function DetalhesDoPrato(props: Props) {

    //const { nome, foto, descricoes, Grande, Medio, id, categoria } = props;

    return (
        <h2></h2>
        // <>
        //     {/* <section>
        //         <input type="text" />
        //         <div>
        //             <div>
        //                 <img src={foto} alt="Imagem Cardapio" />
        //             </div>
        //             <div>
        //                 <h2>{nome}</h2>
        //                 <p>{descricoes}</p>
        //             </div>
        //             <div>
        //                 <div>
        //                    {categoria.grupo}
        //                 </div>
        //                 <div>
        //                    R$  {Grande}
        //                    R$ {Medio}
        //                 </div>
        //             </div>
        //         </div> */}
        //     </section>
        // </>
    );
}

export default DetalhesDoPrato;