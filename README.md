# Projeto QA Store Desafio

- Objetivo: automatizar cenários de teste visando tempo, qualidade do projeto e avaliação do candidato
- Squad: Teste para vaga de QA
- Coordenador: Carla
- P.O.: Inexistente
- Tech leads: Inexistente
- QA: Lafaiete Rodrigues Machado

## Instalação e execução

#### Requisitos:
  - Node: a partir da versão 12 (Projeto realizado na versão 16.16.0)
  - Hardware: 4GB Ram min, 8GB RAM recomendado

  - Execução e boas práticas:
    - Criar uma pasta com nome "Desafio QA" na pasta "Meus Documentos" da máquina (C:\Users\users\Documents\Desafio QA)
    - Realizar o git clone para essa pasta e instalar dependências do node
    - Ex:
      - Com o terminal aberto:

        cd C:\GitHub\Desafio-QA
        git clone 'link do projeto'
        npm install
        ###

    - Caso as dependências do node não sejam instaladas, deve-se instalar de forma separada:
      npm install -D cypress@12.2.0

    - Instalado e configurado a biblioteca de relatórios Mochawesome 

      - Execução:
        abrir interface do cypress: npx run cy:open
        executar em modo headless: npx run cy:run
        executar em modo headless gerando relatório do mochawesome: npx cypress run --reporter mochawesome