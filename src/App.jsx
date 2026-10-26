import React from 'react';
import { NavLink, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  return <>
    <header><div className="container"><p className="eyebrow">PW2 · AVALIAÇÃO 02</p><h1>Catálogo de filmes</h1>
      <nav aria-label="Menu principal">
        <NavLink to="/" end>Início</NavLink><NavLink to="/criar">Criar</NavLink>
        <NavLink to="/alterar">Alterar</NavLink><NavLink to="/apagar">Apagar</NavLink>
      </nav>
    </div></header>
    <main className="container"><Routes>
      <Route path="/" element={<section><h2>Meus filmes</h2><p>Catálogo em construção.</p></section>} />
      <Route path="*" element={<section><h2>Página em construção</h2><Link to="/">Voltar ao início</Link></section>} />
    </Routes></main>
    <footer className="container">Programação para Web II · Catálogo de filmes</footer>
  </>;
}
