import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormularioFilme({ inicial = {}, onSalvar, ocupado, texto }) {
  const [nome, setNome] = useState(inicial.nome || '');
  const [genero, setGenero] = useState(inicial.genero || '');
  const [ano, setAno] = useState(inicial.ano || '');
  const [erro, setErro] = useState('');
  function enviar(evento) {
    evento.preventDefault();
    if (!nome.trim() || !genero.trim() || !ano.trim()) {
      setErro('Preencha todos os campos.'); return;
    }
    setErro('');
    onSalvar({ nome: nome.trim(), genero: genero.trim(), ano: ano.trim() });
  }
  return <form onSubmit={enviar}>
    <label htmlFor="nome">Nome</label><input id="nome" required value={nome} onChange={e => setNome(e.target.value)} />
    <label htmlFor="genero">Gênero</label><input id="genero" required value={genero} onChange={e => setGenero(e.target.value)} />
    <label htmlFor="ano">Ano</label><input id="ano" required value={ano} onChange={e => setAno(e.target.value)} />
    {erro && <p role="alert" className="error">{erro}</p>}
    <div className="actions"><button disabled={ocupado}>{ocupado ? 'Salvando…' : texto}</button><Link className="button secondary" to="/">Cancelar</Link></div>
  </form>;
}
