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

Realizado teste e icones ja funcionando, neste momento o botão claro e escuro aparece mais ainda não foi criado a funcionalidade, será criada mais a frente.

### 3° Commit - ON C HEADER ADD ICONS FontAwesome

*** 

### 4° Passo

Agora Iremos Criar a Pagina incial onde vamos direcionar ou para um pagina com informaçoes sobre o Canal no Youtube, ou para um Portifolio de Desenvolvedor que estamos criando.

Abrir home.component.html
- Adicionar div container
- Adicionar na div container as divs "cssWordEfect", "cssWordEfect2", "buttons"(criando butoes dentro para youtube e portifoilio)

Objetivo nesse passo é criar a estrutura dessa primeira pagina ainda não será adicionado estilos

Abrir footer.component.html
- criar criar div com copy 2023 

### 4° Commit - Home and Footer C structure

*** 

### 5° Passo

Nesse passo o objetivo é criar uma base de estilos css de forma que ao trocar cores seja aplicado para todos os componentes, no arquivo styles.css iremos criar variaveis, essa variaveis sao usadas para definir as cores no componentes e ao trocar a cor no arquivo principal troca automaticamente em todos.

Exemplo:

--cor-preto: black;

Iremos também zerar margin e padding.

Nesse passo também criamos o css de header e footer, para que os mesmos fiquem fixos na tela e também na largura total da tela, sendo header o cabeçalho fixo no top = 10px e footer o rodapé fixo no bottom =0

Para os icones das redes sociais vamos agora estilizar eles, isso será realizado no arquivo header.css

Primeiramente vamos centralizar os icones no meio da tela, para isso precisamos colocar como 
- display: flex; (torna um flex container, a partir daí podemos manipular todos os elementos filhos dentro do container)
- justify-content: center; (horizontal)
- align-items: center; (vertical)

<fa-icon> é a tag que iremos usar, pois é a tag de cada icone filho no container

- font-size: 27px (para aumentar o tamanho do icone)
- margin: 0 10px (para deixar um espaço entre os icones)

Queremos que o Botão do tema claro escuro fique possicionado no canto direito para isso usaremos a class layout
- position: fixed;
- right: 10px;

Nesse momento podemos ver que o componente home está ficando em baixo do header, para que isso nao aconteça precisamos definir para que esse componente começe depois do header, para isso no arquivo home.component.css

na class container
- margin-top:5% (pode ser usado também px mas futuramente pensamos em deixar responsivo então poderemos alterar conforme o desenvolvimento e verificar qual usar)

Nesse momento desejamos separar as div internas desse componente para isso vamos declarar suas div e entao add margin de 5% criando um espaço entre elas.

### 5° Commit - Created Basic Styles Css

*** 

### 5° Passo






