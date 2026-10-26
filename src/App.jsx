import React from 'react';
import { NavLink, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Ler from './pages/Ler';
import Criar from './pages/Criar';
import BuscarFilme from './pages/BuscarFilme';

export default function App() {
  return <>
    <header><div className="container"><div className="brand"><span className="brand-icon" aria-hidden="true">▶</span><span>CINE<span className="brand-light">LIST</span></span><span className="project-tag">PW2 · Avaliação 02</span></div>
      <div className="hero"><div><p className="eyebrow">SEU UNIVERSO EM CENA</p><h1>Boas histórias.<br /><span>Um só lugar.</span></h1><p className="hero-description">Organize seus filmes e reencontre suas próximas grandes histórias.</p></div><div className="cinema-art" aria-hidden="true"><div className="film-card card-back"></div><div className="film-card card-front"><div className="clapper"></div><span className="art-label">SUA COLEÇÃO</span><span className="art-play">▶</span><span className="art-caption">Toda história merece uma cena.</span></div><span className="art-star">✦</span></div></div>
      <nav aria-label="Menu principal">
        <NavLink to="/" end>Início</NavLink><NavLink to="/criar">Criar</NavLink>
        <NavLink to="/alterar">Alterar</NavLink><NavLink to="/apagar">Apagar</NavLink>
      </nav>
    </div></header>
    <main className="container"><Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/ler/:id" element={<Ler />} />
      <Route path="/criar" element={<Criar />} />
      <Route path="/alterar" element={<BuscarFilme key="alterar" />} />
      <Route path="/apagar" element={<BuscarFilme key="apagar" apagar />} />
      <Route path="*" element={<section><h2>Página não encontrada</h2><Link to="/">Voltar ao início</Link></section>} />
    </Routes></main>
    <footer className="container"><span>CINELIST · Catálogo de filmes</span><span>Feito para quem gosta de boas histórias.</span></footer>
  </>;
}
