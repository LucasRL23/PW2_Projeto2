# PW2_Projeto2 — Catálogo de filmes

Avaliação 2 de Programação para Web II. Aplicação React com React Router DOM e Axios, preparada para uma API REST online (MockAPI).

## Executar

Requer Node.js 22.12 ou superior e npm.

```sh
npm install
```

Copie `.env.example` para `.env` e preencha `VITE_API_URL` com a URL completa do recurso de filmes. Depois:

```sh
npm run dev
```

## Configurar o MockAPI

1. Acesse https://mockapi.io e entre na sua conta.
2. Crie um projeto gratuito (ou utilize um existente).
3. Crie o recurso `filmes`, com os campos `nome`, `genero` e `ano`, todos do tipo String. O `id` é gerado pelo serviço. Remova campos extras automáticos, se houver.
4. Copie a URL completa do recurso, terminada em `/filmes`, para `VITE_API_URL` no `.env`.
5. Reinicie o servidor do Vite após alterar o `.env`.

A URL de uma API usada no navegador é pública; não coloque senhas ou tokens em variáveis VITE_. O projeto ainda precisa de um endpoint real para realizar o CRUD. Não há JSON Server nem persistência local simulando a entrega.

## Páginas

| Rota | Comportamento |
| --- | --- |
| `/` | Lista somente ID e nome; clicar abre os detalhes. |
| `/ler/:id` | Mostra ID, nome, gênero e ano. |
| `/criar` | Cadastra nome, gênero e ano com POST. |
| `/alterar` | Primeiro procura por ID; depois apresenta o formulário e salva com PUT. |
| `/apagar` | Primeiro procura por ID; depois mostra os dados e permite confirmar DELETE. |

Após criar, alterar ou apagar, retorna ao início. Cancelar sempre retorna ao início. ID inexistente mostra mensagem com opção de voltar. Falhas de rede mostram um aviso sem fingir sucesso.

## Publicar no Vercel

Importe este repositório como projeto Vite. Configure `VITE_API_URL` com a mesma URL completa do recurso de filmes. O comando de build é `npm run build`, e a pasta de saída é `dist`. O `vercel.json` permite acessar diretamente as rotas internas. Ao mudar a variável, faça um novo deploy.

## Conferência manual com a API configurada

- Criar um filme e conferir que aparece com ID e nome no início.
- Abrir o filme e conferir os quatro campos.
- Alterar: procurar seu ID, editar e salvar; conferir a mudança.
- Apagar: procurar o ID, conferir os dados e confirmar a exclusão.
- Procurar um ID inexistente em Alterar e Apagar.
- Conferir Cancelar em cada página e avisos em caso de falha da API.
- Recarregar uma rota interna depois da publicação no Vercel.

## Estado inicial

Código das cinco páginas implementado. MockAPI configurado; operações POST, GET, PUT e DELETE verificadas com um registro temporário, removido após o teste. A URL pública do recurso está em `.env.example`. Publicação no Vercel pendente.
