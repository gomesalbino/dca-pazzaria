
import logo from "../../assets/logo.svg";

import styles from "./Footer.module.scss";

import {AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";

function Footer() {
    return ( 
        <>
        <footer className={styles.footer}>
            <div className={styles.footer__corpo}>
                <img src={logo} alt="Imagem de logo" />
            </div>
            <div className={styles.footer__social}>
                <a href="https://www.linkedin.com/in/albino-gomes-1b3493182/">
                <AiOutlineLinkedin size={35} color="#fff" className={styles.footer__social} />
                </a><a href="https://github.com/gomesalbino">

                <AiOutlineGithub size={35} color="#fff" className={styles.footer__social} />
                </a>
            </div>
        </footer>
        
        </>
     );
}

export default Footer;



