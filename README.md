# O que é uma API, REST e RESTFul ?

## Analogia 

Vamos imaginar que vc (Cliente) esteja num restaurante, e um Garçon irá atendê-lo, anotar os pedidos no bloco de notas e para levar seus pedidos a cozinha

Cliente (Client)
Garçon (pedidos, levar_pedidos) -> API
Bloco de Notas -> Protocolo HTTP
Cozinha (Server)

Sendo assim a API é responsável por:

- Estabelecer comunicação entre diferentes serviços
- Meio de campo entre tecnologias
- Intermediador para troca de informações

> Uma API, a grosso modo, é uma URL e esta pode possui um "endpoint", que é o argumento que vem após a "/" no final da URL

## REST

O REST determina algumas obrigatoriedades na transferência de dados via API

### Analogia 

Você entra em um restaurante com alguns exigências:

- Limpo
- Bom atendimento
- Tenha organização nos pedidos

Porém, o restaurante possui algumas políticas de comportamento, onde clientes não devem:

- Xingar
- Gritar


### Conceitos

A transferência de dados por API geralmente utiliza o protocolo http;

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

O Rest delimita algumas obrigações nas transferências de dados


### 6 Necessidades (constraints) para ser RESTful

- _Client-server_: Client-server: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (opicional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.


## RESTFUL

Ser RESTFUl é cumprir a aplicação dos padrões REST


## Boas Práticas
- Utilizar verbos HTTP para nossas requisições

>GET: Receber dados de um Resource 

>POST: Enviar dados para serem processados por um Resource

>PUT: Atualizar dados de um Resource

>DELETE: Deletar um Resource

- Não utilize uma barra ao final do Endpoint
- Nunca deixe o Cliente sem respostas

### Status das Respostas
- 1xx: Informação
- 2xx: Sucesso
    - 200: OK
    - 201: CREATED
    - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found!
- 5xx: Server Error 500: Internal Server Error