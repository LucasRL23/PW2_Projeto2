import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, mensagemErro } from '../api';
import DadosFilme from '../components/DadosFilme';

export default function Ler() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState('');
  useEffect(() => {
    let ativo = true;
    setFilme(null); setErro('');
    api.get(`/${encodeURIComponent(id)}`).then(({ data }) => { if (ativo) setFilme(data); })
      .catch(e => { if (ativo) setErro(mensagemErro(e)); });
    return () => { ativo = false; };
  }, [id]);
  return <section><h2>Dados do filme</h2>
    {erro ? <p role="alert" className="error">{erro}</p> : filme ? <DadosFilme filme={filme} /> : <p role="status">Carregando filme…</p>}
    <div className="actions"><Link to="/" className="button secondary">Cancelar</Link></div>
  </section>;
}
