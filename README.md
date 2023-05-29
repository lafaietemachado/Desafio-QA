# Projeto QA Store Desafio

- Objetivo: automatizar cenários de teste visando tempo, qualidade do projeto e avaliação do candidato
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