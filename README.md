# PortifolioV01

***

## Breve Descrição

Nesse arquivo vou descrever o passo a passo para a Criação do Codigo Front End do meu Website.

Este WebSite será inicializado no endereço www.vatien.com.br e visa criar uma pagina incial que ira direcionar para um Site do Canal do Youtube, esse site busca trazer informações para os seguidores do canal e possivelmente oferecer serviçoes e produtos para os seguidores que podem se tornar possiveis clientes no futuro, além disso essa pagina incial busca também trazer o Portifolio de desenvolvedor que começa a ser criado com esse site buscando organizar os projetos e eventualmente oferecer serviços de  criação de sistemas web futuramente.

Nesse projeto vamos estar usando angluar e caso seja necessario utilizar um banco de dados usando Node.js como Back End do projeto e Mysql com linguanguem para o banco.

Futuramente pretendo trazer alguns projetos usando react e outros para ir criando um portifolio.

Vamos então para o primeiro passo.

*** 

### 1° Passo

Após selecionar a pasta de criação do projeto abri o terminal e colocar o codigo entre "" abaixo:
- "ng new portifolioV01"
- Add rotes
- CSS

Após selecionar as opções o projeto será criado e então abrimos a pasta do projeto e buscamos por este aqruivo que chamamos de README.md

Nesse arquivo vamos buscar trazer o maior numero de detalhes sobre o passo a passo da criação desse projeto facilitando a sua reescrita no futuro e também caso for necessário buscar informação de como foi realizado alguma funcionalidade, vamos utilizar o GitHub para controlar as versões e commits dividindo os passo a passo do projeto.

Abrimos o arquivo app.component.html, nesse arquivo apagamos as informações criadas automaticamente pelo angular Cli e colocamos um tag h1 com "hello word"

Salvamos os arquivos 

no terminal usamos " cd .\portifolioV01\" para direcionar para pasta apropriada antes de incializar e restar o projeto.
depois usamos "npm run start" e entao para testar abrimos http://localhost:4200/ , temos o nosso Hello Word aparecendo na tela mostrando que o projeto foi criado conforme planejado.

Sendo assim entao vamos para o primeiro commit 

### 1° Commit - Criação do Projeto Angular e teste Hello Word

*** 

### 2° Passo

Nesse momento vamos criar os componetes com a Ajuda do Angular Cli, o objetivo é criar componentes Cabeçalho(header), Rodapé(footer), home( para direcionar ou para o youtube ou para portifolio), teremos entao uma pasta youtube com o componente homeyoutube e a pasta portifolio com o componente homeportifolio.

Primeiramente criaremos esses componentes e depois adicionaremos outros conforme o projeto for evoluindo sendo assim então usaremos os comandos no terminal

"ng g c header"
"ng g c footer"
"ng g c home"
"ng g c youtube/homeyoutube" (nesse caso faltou usar o Case up na Palavra Youtube)
"ng g c portifolio/homePortifolio"

Foi então Adicionado as tag dos componentes no arquivo app.component.html e no home.component.html, testamos para verificar que os componenes estão sendo reconhecidos e funcionando corretamente.

### 2° Commit - Criando Componentes Iniciais c/ CLI

Observação: Quando criamos componente utilizando o Angular Cli, a declaração no app.module é automatica, caso criar o arquivo manualmente será necessário declarar, sendo muito mais rápido a criação pelo terminal, outro ponto a ser lembrado é de não criar componentes com mesmo nome para evitar o conflito, o arquivo app.module não vai entender dois componentes com a mesmo nome ele nao consegue indentificar qual é qual causando conflitos.

*** 

### 3° Passo

Nesse momento vamos criar o componente do cabeçalho, no cabeçalho buscamos adicionar os icones das redes sociais, e um botão no qual seja possivel trocar o layout/tema entre claro e escuro.

https://www.npmjs.com/package/@fortawesome/angular-fontawesome (referência do passos abaixo)
Primeiramente para criar os icones vamos seguir os passoas abaixo no terminal :

npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons (este não está na referencia mais é necessario para adicionar os icones de marcas)
npm install @fortawesome/angular-fontawesome@0.11.x (usado a versao para angular 14 conforme referência)


Copiar import conforme a referência.

Abrir o header.component.ts 
- Declarar os nomes das variaveis
- Adicionar o imports

Abrir header.component.ts
- Adicionar div container
- Adicionar div icons e layout dentro de container
- Adicionar "<fa-icon>" para cada icone dentro da div icons
- Adicionar "button" para troca de cor do tema na div layout

Realizado teste e icones ja funcionando, neste momento o botão claro e escuro ainda nao foi criado.

### 3° Commit - ON C HEADER ADD ICONS FontAwesome



