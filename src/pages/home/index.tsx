
import FatiasPizzas from "components/FatiasPizzas";
import PratosMenus from "components/PratosMenu";
import banner from "../../assets/banner.png";
import styles from "../home/Home.module.scss";

function Home() {
    return (
        <>
            <div>
                <div className={styles.banner}>
                    <img className={styles.banner__imagem} src={banner} alt="Imagem do Banner" />
                </div>
                <div>
                    <FatiasPizzas />
                </div>
                <div>
                    <PratosMenus />
                </div>
            </div>
        </>
    );
}

export default Home;