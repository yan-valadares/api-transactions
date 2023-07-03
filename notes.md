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