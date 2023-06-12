import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export function Menu() {
    return (
        <header className={styles.header}>
            <h1>Mira Market</h1>
            <div>
                <Link className={styles.menuText} to="/produtos"> Lista de Produtos </Link>
                <Link className={styles.menuText} to="/produtos/create"> Cadastrar Produto </Link>                
            </div>
        </header>
    )
}