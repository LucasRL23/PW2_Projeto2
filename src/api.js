import axios from 'axios';

// URL completa do recurso /filmes no MockAPI, configurada no arquivo .env.
export const API_URL = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '');
export const api = axios.create({ baseURL: API_URL, timeout: 15000 });
api.interceptors.request.use((config) => {
  if (!API_URL) throw new Error('O catálogo ainda não está conectado ao servidor de filmes.');
  return config;
});
export function mensagemErro(erro) {
  if (erro.response?.status === 404) return 'Filme não encontrado.';
  if (!API_URL) return 'O catálogo ainda não está conectado ao servidor de filmes.';
  return 'Não foi possível acessar o servidor. Tente novamente.';
}
