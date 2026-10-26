import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, mensagemErro } from '../api';
import FormularioFilme from '../components/FormularioFilme';

export default function Criar() {
  const navegar = useNavigate();
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState('');
  async function salvar(dados) {
    if (ocupado) return;
    setOcupado(true); setErro('');
    try { await api.post('', dados); navegar('/'); }
    catch (e) { setErro(mensagemErro(e)); }
    finally { setOcupado(false); }
  }
  return <section><h2>Criar filme</h2>{erro && <p role="alert" className="error">{erro}</p>}<FormularioFilme onSalvar={salvar} ocupado={ocupado} texto="Criar" /></section>;
}
