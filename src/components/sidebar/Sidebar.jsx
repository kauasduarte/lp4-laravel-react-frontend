import styles from './Sidebar.module.css'
import { Avatar } from '../avatar/Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />

            <div className={styles.profile}>

                <Avatar src="https://github.com/andreneery.png" />

                <strong>TALK</strong>
                <span>Veículos</span>
            </div>

            <footer>
                
            </footer>
        </aside>
    );
}