import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

export function PostDelet() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState({});
    const [status, setStatus] = useState('');
    const [botaoStatus, setBotaoStatus] = useState(true);

    useEffect(() => {
        async function consultar() {
            const response = await axios.get(`http://127.0.0.1:8000/api/produtos/${id}`);
            setProdutos(response.data);
            setBotaoStatus(false);
        }
        consultar();
    }, []);

    async function confirmar(e) {
        try {
            const response = await axios.delete(`http://localhost:8000/api/produtos/${id}`);
            setStatus("Produto Excluído");
            setProdutos({});
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <div>
            <h3>{produtos.nome}</h3>
            {status != 'Produto Excluído' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : ''}
            <Link to='/produtos'>Voltar</Link>
            <h3>{status}</h3>
        </div>
    )
}