import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export function Menu() {
    return (
        <header className={styles.header}>
            <div>
                <Link className={styles.menuText} to="/"> Home </Link>
                <Link className={styles.menuText} to="/produtos"> Lista de Produtos </Link>
                <Link className={styles.menuText} to="/produtos/create"> Cadastrar Produto </Link>                
            </div>
        </header>
    )
}