import styles from './Post.module.css';
import axios from 'axios';
import { useState } from 'react';

export function Post() {
  const [produtos, setProdutos] = useState({});
  const [status, setStatus] = useState('');

  async function gravar(e) {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/produtos',
        {
          nome: produtos.nome,
          tipo: produtos.tipo,
          preco_custo: produtos.preco_custo,
          preco_venda: produtos.preco_venda,
          lote: produtos.lote,
          data_aquisicao: produtos.data_aquisicao,
          data_venda: produtos.data_venda,
          fornecedor: produtos.fornecedor,
          validade: produtos.validade,
        },
        config
      );

      setStatus('Produto cadastrado com sucesso!');
      alert('Produto cadastrado com sucesso!');
      setProdutos({});
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

  return (
    <article className={styles.post}>

      <div className={styles.content}>
        <p>Cadastrar Novo Produto</p>
      </div>

      <form onSubmit={gravar} className={styles.commentForm}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          value={produtos.nome || ''}
          onChange={(e) => setProdutos({ ...produtos, nome: e.target.value })}
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo do Produto"
          value={produtos.tipo || ''}
          onChange={(e) => setProdutos({ ...produtos, tipo: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          name="preco_custo"
          placeholder="Preço de Compra"
          value={produtos.preco_custo || ''}
          onChange={(e) => setProdutos({ ...produtos, preco_custo: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          name="preco_venda"
          placeholder="Preço de Venda"
          value={produtos.preco_venda || ''}
          onChange={(e) => setProdutos({ ...produtos, preco_venda: e.target.value })}
        />
        <input
          type="text"
          name="lote"
          placeholder="Lote"
          value={produtos.lote || ''}
          onChange={(e) => setProdutos({ ...produtos, lote: e.target.value })}
        />
        <input
          type="text"
          name="data_aquisicao"
          placeholder="Data de Aquisição"
          value={produtos.data_aquisicao || ''}
          onChange={(e) => setProdutos({ ...produtos, data_aquisicao: e.target.value })}
        />
        <input
          type="text"
          name="data_venda"
          placeholder="Data de Venda"
          value={produtos.data_venda || ''}
          onChange={(e) => setProdutos({ ...produtos, data_venda: e.target.value })}
        />
        <input
          type="text"
          name="fornecedor"
          placeholder="Código do Fornecedor"
          value={produtos.fornecedor || ''}
          onChange={(e) => setProdutos({ ...produtos, fornecedor: e.target.value })}
        />
        <input
          type="text"
          name="validade"
          placeholder="Data de Validade"
          value={produtos.validade || ''}
          onChange={(e) => setProdutos({ ...produtos, validade: e.target.value })}
        />
        <button type="submit">Salvar</button>
      </form>
    </article >
  );
}
