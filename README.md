

# Mural de Mensagens

Este é um projeto de mural de mensagens desenvolvido com Node.js e Express. Ele fornece uma API para criar, atualizar, ler e excluir mensagens do Mural.

## Funcionalidades

- **Listar todas as mensagens no mural**
  - Método: GET
  - URL: `/all`
  - Descrição: Retorna todas as mensagens existentes no mural.

- **Criar uma nova mensagem**
  - Método: POST
  - URL: `/new`
  - Descrição: Cria uma nova mensagem no mural com o título e a descrição fornecidos.
  - Parâmetros do corpo da requisição:
    - `title` (string): Título da mensagem.
    - `description` (string): Descrição da mensagem.

- **Atualizar uma mensagem existente**
  - Método: PUT
  - URL: `/update/:id`
  - Descrição: Atualiza uma mensagem existente no mural com o ID fornecido.
  - Parâmetros da URL:
    - `id` (string): ID da mensagem a ser atualizada.
  - Parâmetros do corpo da requisição:
    - `title` (string): Novo título da mensagem.
    - `description` (string): Nova descrição da mensagem.

- **Excluir uma mensagem**
  - Método: DELETE
  - URL: `/delete/:id`
  - Descrição: Exclui uma mensagem do mural com o ID fornecido.
  - Parâmetros da URL:
    - `id` (string): ID da mensagem a ser excluída.

## Pré-requisitos

Antes de executar este projeto, verifique se você possui o Node.js instalado em seu sistema. Além disso, você precisará de uma ferramenta para testar as rotas da API, como o Insomnia.

## Instalação

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto.
3. Instale as dependências usando o comando:
   ```shell
   npm install
   ```

## Uso

1. Inicie o servidor com o comando:
   ```shell
   node app.js
   ```
2. O servidor estará em execução em `http://localhost:3000`.

3. Use o Insomnia ou outra ferramenta similar para testar as rotas da API. Você pode instalar o Insomnia a partir do site oficial: [https://insomnia.rest/](https://insomnia.rest/).

## Exemplos de Uso

### Listar todas as mensagens

- Método: GET
- URL: `http://localhost:3000/all`

### Criar uma nova mensagem

- Método: POST
- URL: `http://localhost:3000/new`
- Corpo da requisição (JSON):
  ```json
  {
    "title": "Título da Mensagem",
    "description": "Descrição da Mensagem"
  }
  ```

Peço desculpas pelo corte incompleto no último trecho. Aqui está a continuação do README:

### Atualizar uma mensagem existente (continuação)

- Método: PUT
- URL: `http://localhost:3000/update/:id`
- Parâmetros da URL:
  - `id`: ID da mensagem a ser atualizada
- Corpo da requisição (JSON):
  ```json
  {
    "title": "Novo Título da Mensagem",
    "description": "Nova Descrição da Mensagem"
  }
  ```

### Excluir uma mensagem

- Método: DELETE
- URL: `http://localhost:3000/delete/:id`
- Parâmetros da URL:
  - `id`: ID da mensagem a ser excluída

Certifique-se de substituir `:id` pelos IDs corretos das mensagens que deseja atualizar ou excluir.

## Testando as rotas com o Insomnia

1. Baixe e instale o Insomnia a partir do site oficial: [https://insomnia.rest/](https://insomnia.rest/).

2. Abra o Insomnia e crie um novo workspace ou selecione um existente.

3. Crie uma nova requisição para cada rota da API do mural de mensagens. Por exemplo, para testar a rota de listagem de todas as mensagens, siga estas etapas:
   - Clique no botão "+ New Request" no canto superior esquerdo.
   - Dê um nome para a requisição (por exemplo, "Listar Mensagens").
   - Selecione o método HTTP "GET".
   - Insira a URL completa da rota, por exemplo: `http://localhost:3000/all`.
   - Clique em "Send" para enviar a requisição e ver a resposta da API.

Repita essas etapas para as demais rotas, adaptando o método HTTP e a URL conforme necessário.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto. Você pode enviar sugestões, correções de bugs ou até mesmo adicionar novos recursos. Para contribuir, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch com sua modificação: `git checkout -b minha-modificacao`.
3. Faça as alterações desejadas e commit as mudanças: `git commit -m "Minha modificação"`.
4. Envie para o repositório remoto: `git push origin minha-modificacao`.
5. Abra um Pull Request descrevendo suas alterações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
