import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, mensagemErro } from '../api';
import DadosFilme from '../components/DadosFilme';
import FormularioFilme from '../components/FormularioFilme';

// As páginas Alterar e Apagar começam apenas com a busca por ID.
// O formulário/dados aparecem somente depois que o filme foi encontrado.
export default function BuscarFilme({ apagar = false }) {
  const [id, setId] = useState('');
  const [filme, setFilme] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState('');
  const navegar = useNavigate();
  async function buscar(evento) {
    evento.preventDefault();
    if (ocupado || !id.trim()) return;
    setOcupado(true); setErro('');
    try { const { data } = await api.get(`/${encodeURIComponent(id.trim())}`); setFilme(data); }
    catch (e) { if (e.response?.status === 404) setNaoEncontrado(true); else setErro(mensagemErro(e)); }
    finally { setOcupado(false); }
  }
  async function salvar(dados) {
    if (ocupado) return;
    setOcupado(true); setErro('');
    try {
      const caminho = `/${encodeURIComponent(filme.id)}`;
      if (apagar) await api.delete(caminho);
      else await api.put(caminho, dados);
      navegar('/');
    } catch (e) { setErro(mensagemErro(e)); }
    finally { setOcupado(false); }
  }
  return <section><h2>{apagar ? 'Apagar filme' : 'Alterar filme'}</h2>
    {erro && <p role="alert" className="error">{erro}</p>}
    {naoEncontrado ? <><p role="alert">Filme não encontrado.</p><Link className="button secondary" to="/">Voltar para Início</Link></>
      : filme ? (apagar ? <><DadosFilme filme={filme} /><p>Deseja apagar este filme do catálogo?</p><div className="actions"><button className="danger" disabled={ocupado} onClick={() => salvar()}>{ocupado ? 'Apagando…' : 'Apagar'}</button><Link className="button secondary" to="/">Cancelar</Link></div></>
        : <><p><strong>ID:</strong> {filme.id}</p><FormularioFilme inicial={filme} onSalvar={salvar} ocupado={ocupado} texto="Alterar" /></>)
      : <form onSubmit={buscar}><label htmlFor="busca-id">ID do filme</label><input id="busca-id" required pattern=".*\S.*" value={id} onChange={e => setId(e.target.value)} /><div className="actions"><button disabled={ocupado}>{ocupado ? 'Procurando…' : 'Procurar'}</button><Link className="button secondary" to="/">Cancelar</Link></div></form>}
  </section>;
}
