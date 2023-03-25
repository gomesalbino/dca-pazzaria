
import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.scss";

function MenuNave({children} : {children ? : React.ReactNode}) {

  const rotas = [

    {
      label: 'Home',
      to: '/'
    },
    {
      label: "Sabores",
      to: '/sabores'
    }
  ]

  return (
    <>
      <header className="App-header">
        <ul className={styles.navMenu}>
          {rotas.map((rota, index) =>  <li key={index} className={styles.navMenu__lista}><Link to={rota.to}>{rota.label}</Link></li>)}
        </ul>
      </header>
      <div>
        <Outlet />
        {children}
      </div>
    </>
  );
}

export default MenuNave;