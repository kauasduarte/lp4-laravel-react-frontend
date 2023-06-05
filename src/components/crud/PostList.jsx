import style from './Post.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function PostList() {

    const [quantidadeProdutos, setQuantidadeProdutos] = useState([]);

    useEffect(() => {
        async function Produtos() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/qtd-produtos');
                setQuantidadeProdutos(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        Produtos();
    }, []);

    return (
        <div className={style.card}>
            <h2 >Produtos Cadastrados</h2>
            <p>{quantidadeProdutos}</p>
        </div>
    )
}