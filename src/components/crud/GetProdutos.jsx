import styles from './Post.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function Produtos() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/produtos');
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    Produtos();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <article className={styles.post}>
      <div className={styles.content}>
      </div>
      <div className={styles.produtos}>
        <table>
          <thead>
            <tr>
              <th>Cód</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Preço (R$)</th>
              <th>Validade </th>             
            </tr>
          </thead>
          <tbody>
            {produtos.map((produtos) => (
              <tr key={produtos.id}>
                <td >{produtos.id}</td>
                <td >{produtos.nome}</td>
                <td >{produtos.tipo}</td>
                <td >{produtos.preco_venda}</td>
                <td >{produtos.validade}</td>
                <td>
                  <button className={styles.btn} onClick={() => { window.location.href = `produtos/edit/${produtos.id}`; }}>
                    Editar
                  </button>
                </td>
                <td>
                  <button className={styles.btnDelet} onClick={() => { window.location.href = `produtos/delete/${produtos.id}`; }}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
