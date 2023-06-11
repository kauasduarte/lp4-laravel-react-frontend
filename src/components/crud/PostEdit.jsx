import styles from './Post.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export function PostEdit() {
    const { id } = useParams();
    const [editprodutos, setEditProdutos] = useState([]);
    const [status, setStatus] = useState('');
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function Produtos() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/produtos/${id}`);
                setEditProdutos(response.data);
                //setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        Produtos();
    }, []);

    async function gravar(e) {
        e.preventDefault(); // cancela o submit
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/produtos/${id}`, editprodutos);
            setStatus("Produto Atualizado");
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <article className={styles.post}>

            <div className={styles.content}>
                <p>Editar Produtos</p>
            </div>

            <form onSubmit={gravar} className={styles.commentForm}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do Produto"
                    value={editprodutos.nome || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, nome: e.target.value })}
                />
                <input
                    type="text"
                    name="tipo"
                    placeholder="Tipo do Produto"
                    value={editprodutos.tipo || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, tipo: e.target.value })}
                />
                <input
                    type="number"
                    step="0.01"
                    name="preco_custo"
                    placeholder="Preço de Compra"
                    value={editprodutos.preco_custo || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, preco_custo: e.target.value })}
                />
                <input
                    type="number"
                    step="0.01"
                    name="preco_venda"
                    placeholder="Preço de Venda"
                    value={editprodutos.preco_venda || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, preco_venda: e.target.value })}
                />
                <input
                    type="date"
                    name="lote"
                    placeholder="Lote"
                    value={editprodutos.lote || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, lote: e.target.value })}
                />
                <input
                    type="date"
                    name="data_aquisicao"
                    placeholder="Data de Aquisição"
                    value={editprodutos.data_aquisicao || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, data_aquisicao: e.target.value })}
                />
                <input
                    type="text"
                    name="data_venda"
                    placeholder="Data de Venda"
                    value={editprodutos.data_venda || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, data_venda: e.target.value })}
                />
                <input
                    type="text"
                    name="fornecedor"
                    placeholder="Código do Fornecedor"
                    value={editprodutos.fornecedor || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, fornecedor: e.target.value })}
                />
                <input
                    type="date"
                    name="validade"
                    placeholder="Validade do Produto"
                    value={editprodutos.validade || ''}
                    onChange={(e) => setEditProdutos({ ...editprodutos, validade: e.target.value })}
                />
                <button type="submit">Salvar</button>
            </form>
        </article >
    );
}