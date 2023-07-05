## 1° passo: Configurações

###     Configurando o ambiente de desenvolvimento
    1° passo -> Instalar o typescript como dependência de desenvolvimento
    2° passo -> Rodar o executável na pasta .bin da pasta node_modules para configurar o typescript como padrão do node
    3° passo -> Configurar a versão do js a qual o programa será convertido no final da compilação no arquivo tsconfig.json
    4° passo -> Instalar o fastify
    5° passo -> Instalar o pacote de tipos do node para typescript, visto que o node não "entende" o typescript nativamente
    6° passo -> Instalar o tsx como dependência de desenvolvimento para facilitar o processo de conversão de js para ts (recomendado só para desenvolvimento) {comando: npx tsc nomeArquivo}
    7° passo -> Instalar o eslint para padronização do projeto
    8° passo -> Criar o arquivo de configuração do eslint (.eslintrc.json) e definir o padrão a ser seguido (nesse caso node)
    9° passo -> Configurar nas opções do VSCode para que os arquivos sejam padronizados após o salvamento
    10° passo -> Instalar o zod para validação de dados dentro do ambiente
    11° passo -> Criar uma pasta env dentro da pasta src e criar um arquivo index.ts para configuração do zod 

###     Configurando o banco de dados
    1° passo -> Instalar o Knex e o driver do sqlite (banco utilizando na aplicação)
    2° passo -> Criar o arquivo de conexão com o banco
    3° passo -> Configurar o arquivo .gitignore para ignorar o arquivo do banco
    4° passo -> Criar o arquivo knextfile para configuração da utilização do banco no ambiente de desenvolvimento
    5° passo -> Configurar o package.json para entendimento do ts no knex
    6° passo -> Configurar a criação das migrations
    7° passo -> Criar as migrations

### Observações
    1-> Migrations NUNCA podem ser alteradas se já foram para produção
    2-> Criar um arquivo .env na raíz do projeto para armazenar as variáveis do ambiente (ambiente de produção, nesse caso)
    3-> O arquivo .env pode conter informações sensíveis, então deve ser colado dentro do arquivo .gitignore
    4-> Criar um arquivo .env.example para subir exemplos do conteúdo do .env, já que desenvolvedores não envolvidos na criação da aplicação não sabem o que o arquivo .env deve conter
    5-> É interessante a criação de "erros personalizados", fazendo com que a identificação de erros (queremos que não, mas pode ser que aconteçam) seja facilitada.
    5-> Todo plugin do fastify deve ser uma função assíncrona
    6-> O prefix no registro de um plugin serve para definir uma rota padrão (pré-fixada) evitando que as rotas do mesmo plugin precisem ter mais um de parâmetro na URL
    7-> O arquivo com extensão .d.ts serve para sobrescrição de tipos de dados, nesse caso usado para escrever dados sobre as tabelas do banco
    8-> Os cookies são formas de mantermos o contexto entre as requisições
    9-> Para uso de cookie o plugin @fastify/cookie é necessário

## Testes Automatizados
    - Tipos de testes
        - 1: Unitários-> unidadade da sua aplicação
        - 2: Integração-> comunicação entre duas ou mais unidades
        - 3: e2e - ponta a ponta-> simulam um usuário operando na nossa aplicação (teste completo)
            e2e no front-end: faz todo o passo a passo de um login, por exemplo, desde a abertura do navegador até o fim da aplicação
            e2e no back-end: chamadas HTTP, WebSockets
    - Pirâmides de testes: 
            - e2e-> não dependem de nenhuma tecnologia e não dependem da arquitetura do projeto
    - O vitest é o framework utiliza nessa aplicação para os testes automatizados
    - O teste é dividido em "três principais partes": o título do teste, a requisição que ele irá fazer, a validação da resposta dessa requisição
    - A ferramenta 'supertest' serve como uma forma de fazer requisições (para teste) sem que o servidor esteja UP
        - Contudo, o 'supertest' é desenvolvido em JS e para utilização do mesmo em uma aplicação TS se faz necessário a instalação do suporte para TS
    - A aplicação deve estar pronta para receber requisições antes do teste ser iniciado, por isso o uso do 'beforeAll'
    - A aplicação deve ser fechada após o teste ser finalizado, por isso o uso do 'afterAll'
    - Todo teste deve-se excluir de qualquer contexto
    - Um teste jamais deve ser escrito sendo dependente de outro teste
    - É importante a separação dos ambientes de desenvolvimento e de teste, pois um pode influenciar no outro, o que não é muito interessante
    - O teste deve se adaptar ao código e não vice-versa