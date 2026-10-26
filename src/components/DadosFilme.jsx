import React from 'react';
export default function DadosFilme({ filme }) {
  return <dl><dt>ID</dt><dd>{filme.id}</dd><dt>Nome</dt><dd>{filme.nome}</dd><dt>Gênero</dt><dd>{filme.genero}</dd><dt>Ano</dt><dd>{filme.ano}</dd></dl>;
}
