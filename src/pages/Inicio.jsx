import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, mensagemErro } from '../api';

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  useEffect(() => {
    let ativo = true;
    api.get('').then(({ data }) => { if (ativo) setFilmes(data); })
      .catch(e => { if (ativo) setErro(mensagemErro(e)); })
      .finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, []);
  return <section><h2>Meus filmes</h2><p>Selecione um filme para ler seus dados.</p>
    {carregando && <p role="status">Carregando filmes…</p>}
    {erro && <p role="alert" className="error">{erro}</p>}
    {!carregando && !erro && (filmes.length ? <ul className="filmes">{filmes.map(filme => <li key={filme.id}><Link to={`/ler/${encodeURIComponent(filme.id)}`}><span><strong>ID:</strong> {filme.id}</span><span><strong>Nome:</strong> {filme.nome}</span></Link></li>)}</ul> : <p>Nenhum filme cadastrado. Use o menu Criar para começar.</p>)}
  </section>;
}
