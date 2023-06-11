import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Post } from '../crud/Post';
import { PostEdit } from '../crud/PostEdit';
import { PostDelet } from '../crud/PostDelet';
import { Menu } from './Menu';
import { Produtos } from '../crud/GetProdutos';
import styles from './Menu.module.css'

export function Header() {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <div>
                    <div className={styles.wrapper}>
                        <main>
                            <Routes>
                                <Route path="/" element={<Produtos />} />
                                <Route path="/produtos/create" element={<Post />} />
                                <Route path="/produtos/edit/:id" element={<PostEdit />} />
                                <Route path="/produtos/delete/:id" element={<PostDelet />} />
                                <Route path="/produtos" element={<Produtos />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}