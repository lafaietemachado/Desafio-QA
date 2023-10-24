# Projeto QA Store Desafio

- Objetivo: automatizar cenários de teste visando tempo e qualidade do projeto
- Squad: Estudos de Automação
- Coordenador: Inexistente
- P.O.: Inexistente
- Tech leads: Inexistente
- QA: Lafaiete Rodrigues Machado

## Instalação e execução

#### Requisitos:
  - Node: a partir da versão 12 (Projeto realizado na versão 16.16.0)
  - Hardware: 4GB Ram min, 8GB RAM recomendado

  - Execução e boas práticas:
    - Criar uma pasta com nome "Desafio QA" na raiz da máquina (C:\Desafio-QA)
    - Realizar o git clone para essa pasta e instalar dependências do node
    - Ex:
      - Com o terminal aberto:

        cd C:\Desafio-QA
        git clone 'link do projeto'
        npm install
        ###

    - Caso as dependências do node não sejam instaladas, deve-se instalar de forma separada:
      npm install -D cypress@12.12.0

    - Instalado e configurado a biblioteca de relatórios Mochawesome 

    - Instalado a biblioteca Faker versão 7.6.0

    - Instalado a biblioteca gerador validador de cpf versão 5.0.2

      - Execução:
        abrir interface do cypress: npx run cy:open

        executar em modo headless: npx run cy:run
        
        executar em modo headless gerando relatório do mochawesome: npx cypress run --reporter mochawesome

## Aplicação

A aplicação consiste em escrever testes para alguns cenários conforme descrito abaixo, baseado nas APIs do Star Wars, disponível em: https://swapi.dev

Deverão ser desenvolvidos os cenários para teste das seguintes operações:
  - Validar o formato da request (json válido) para a seguinte API: https://swapi.dev/api/films/?format=json

  - Validar retornos para URLs inválidas, como por exemplo: https://swapi.dev/api/people/?format=jsonx

  - Validar se o filme 10 é válido e qual o tipo de retorno ao consultar;

  - Validar o nome correto de um determinado episódio de filme;

  - Validar o ID do episódio e se o tipo do dado está correto

  - Validar o formato de data válida (padrão americano) e validar se a data não é
padrão Brasil

  - Validar o peso e a altura do “people” C-3PO disponível em https://swapi.dev/api/people e validar pelo menos um filme que ele tenha participado