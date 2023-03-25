import {GiFullPizza} from "react-icons/gi";
import {CiPizza }from "react-icons/ci";
import {MdLocalPizza} from "react-icons/md";

import styles from "./FatiasPizzas.module.scss";

function FatiasPizzas() {
    return ( 
        <>
            <div className={styles.fatias}>
                <GiFullPizza size={90}/>
                <CiPizza size={90}/>
                <MdLocalPizza size={90}/>
            </div>
        </>
     );
}

export default FatiasPizzas;