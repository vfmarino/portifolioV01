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

### 6° Passo

Objetivo nesse passo é criar o estilo para mudar de tema claro para escuro.

no arquivo header.component.html
- criar click(toggleTheme()) (chamar a função que vai fazer a troca do estilo)
- criar class do botao isdarktheme e!isdarktheme
- criado div span com ngIF para mudar o nome ao clikar no botao.

no arquivo ts do componente

-isDarkTheme: boolean = true; (começa sempre com tema escuro)

criar função toggleTheme()
- this.isDarkTheme = !this.isDarkTheme;(nesse momento isDarkthem muda false para true trocando o que está escrito no botao)

no arquivo principal index.html criar a class dentro da tag html
- data-theme="dark" (para iniciar sempre no tema escuro)

no arquivo Styles.css
- criar as class dark e ligth (as variaves sao declaradas no principal e chamadas na class)

novamente na função toggleTheme()
const html = document.documentElement;
html.setAttribute('data-theme', this.isDarkTheme ? 'dark':'light')

Nessa etapa pegamos a tag principal HTML do documento index e definimos que deve mudar a classe que ela utiliza de acordo com a variavel isdarktheme para assim permitir trocar o tema.

Testado e verificou-se que funcionou perfeitamente a troca de tema.

### 6° Commit - Change Theme Dark/Light

*** 

### 7° Passo

Nesse passo o Objetivo é criar o Codigo Css para Ter a Palavra Vatien mudando conforme suas inciais
V = Valuation
At = Analise Tecnica
I = investimentos
e = Empreendedorismo
n = noticias

Seguiremos o tutorial abaixo:
https://www.codingnepalweb.com/text-typing-animation-using-only-html-css/

Pontos importantes que não sao explicados no video.

Quantidade de linhas e o tamanho(height) correspondem a a distancia percorrida, como temos no tutorial acima 4 linhas com 90px, top fica com -4x90= -360px

No caso do tempo deve-se ter o tempo para escrever a linha multiplicado pelo numero de linhas no caso 3s x 5 linhas tendo 15 segundos.

Criado estilo para a tag button em home.component.css

Adicionado google fonts

### 7° Commit - Created Animated Painel

*** 

### 8° Passo

Nesse passo vamos criar barra lateral(Side Bar)

No terminal "ng g c sideBar"

usou-se o video https://www.youtube.com/watch?v=fY1OllQpIEw
adaptamos para criar um pisca em branco na palavra Vatien

estilizamos os botoes

Criou-se também componente avatar

### 8° Commit - SideBar/Avatar Component Vatien LED

*** 

### 9° Passo

Nesse passo vamo adicionar funcionalidade aos icones para carregarem a rede social apropriada.

Criação to componente sobre e rotas para botoes

Criação do componente qualificações

### 9° Commit - Route and C Sobre/quali

*** 

### 10° Passo

Nesse passo adicionamos o conteudos Iniciais para as paginas de Portifolio e Apresentação e serviços do canal.
Além disso foram feitas alterações de CSS para reajustar o Layout

### 10° Commit - Initial Content and Css ajust

*** 
### 11° Passo

Criado contato componente

Mudanças de CSS

### 11° Commit - Contato C created and Css ajust

*** 
### 12° Passo

Nesse momento vamos adicionar a função de enviar uma mensagem para o email de contato.

Primeiramente Criamos a conta no email.js com email teste, depois criamos um serviço para configurar o email e enviamos um email de teste, e depois foi criado um template, tudo isso foi realizado no site do email.js

Para instalar a biblioteca no angular usamos: "npm install emailjs-com"
devendo ser importado como "import emailjs from 'emailjs-com';"

aparece 2 vunerabilidades no terminal dizendo para usar npm audit fix para resolver o problema, o mesmo foi utilizado apos o comando abaixo para criar o serviço e sumiu as vunerabilidades.

criar o serviço com "ng generate service emailjs"
nesse momento vou criado uma pasta manualmente como nome service para separar de outros possiveis serivices futuros.
momevndo manualmente os arquivos de serviço para essa pasta.

Criou-se o codigo em emailjs.service.ts

Pontos importantes, devemos lembrar de adicionar os imports no arquivo app.module
- FormsModule,
- ReactiveFormsModule

Sem eles o formulario não funciona e da erro.

importante verificar se os nomes de indentificação no arquivo sao os mesmos, indentificação correta é primordial para funcionar.

### 12° Commit - Function of emailJs created

*** 
### 13° Passo

Nesse passo criamos um componente forms para adicionar um formulario do google para que os usuarios castrarem deixando seu nome email telefon e eintereses, utilizamos o google forms para nao utilizar um back ende e precisar de um servidor somente para isso, no momento o site é apenas uma apresentação do trabalho.

sendo assim criou-se um formulario no google forms, e copiado seu html que é acidionado no arquivo html do componente.

o arquivo ts do componente le as informaçoes nesse "iframe" faz com que o formulario seja carregado dentro do website, a parte ruim é q nao tem a possibilidade de configuar esse cadastro com css para deixar mais atrativo.

### 13° Commit - Created google forms to Register Cliente

*** 
### 14° Passo

Nesse passo vamos deixar o site responsivo

margin:0 auto( 0 define a margem superior(top ou vertical), como zero e auto centraliza o conteudo na horizontal deixando sempre a mesma margem igual tanto da esquerda quanto na direita)

O componente app-home está começando em baixo da component side bar e queremos que ele comece ao lado, isso acontece pq os outros componentes dentro do arquivo app.component são fixos e a tag de rotas "router-outlet não, sendo assim envolvemos ele em uma div para dar margem a essa div e o conteudo começar na margin definida.

Como mudamos os tamanhos foi necessário reconfigurar todo o espaçamento que estavam em PX mudamos para vh e vw, buscando deixar responsivo, busca sempre usar essa forma pois fica mais facil fazer a resposividade no proximos projetos.

### 14° Commit - Responsive part 1

*** 
### 15° Passo

Vamos continuar com a responsividade e usaremo @media only screen and (max-width: ), onde definiremos mudanças para deixar o site mais adaptivo de acordo com a tamnho de tela começaremos com o maior tamanho e vamos diminuindo, os tamanhos que vamos variar serão:

1 - max-width: 2560px(maior que usaremos) representa 4k
2 - max-width: 1440px - Representa Laptop L
3 - max-width: 1024px - Representa Laptop
4 - max-width: 768px - Representa Tablet
5 - max-width: 425px - Representa Mobile L
6 - max-width: 375px - Representa Mobile M
7 - max-width: 320px - Representa Mobile S

começamos pela side-bar, definimos ela com tamanho de 12% até o tamanho de tablet, ja para mobile queremos criar um botão hambuger, que no click, tranforme-se em X e apareceça a side bar, isso pois ela ocuparia muito espaço na tela para esses dispositivos.

Criamos um novo buttom e especificamos a classe .btn button que já tinham pois a mesma não poderiamos ter um button geral nesse caso, sendo uma boa pratica buscar sempre especificar qual button esta estilizando dessa forma.

criamos entao um button com class menu e 3 span que são as 3 linhas do botao hamburger e deixamos como display none até o tamanho de tablet, quando temos os tamanhos mobile trocamos ele para display block e o restante para display none(logo e botoes na side bar), porém aqui ele ainda nao faz o X.

Antes disso quero remover a side bar que é fixa e seu backgroung continua aparecendo, em 100% da vertical, alteramos então para 10%, esse valor pode mudar mais a frente pois estou achando um pouco grande, reduzimos para que o botao ficasse dentro do header até o momento.

Colocamos a Classe menu como positon absolute para ficar no inicio quando a tela está menor que 425% ela cobre o header, senao ela incia apos o reader, alem disso foram feitos pequenos ajuste nos tamanho para ajustar a resposividade.

vamos colocar uma funçao nesse botao que ao click aparece novamente a sidebar, para isso usamos o ngIf do angular Menu aberto, caso esteja falso ele fechar caso seja true ele aparece, na função on init é verificado o tamanho da tela, pois caso a tela seja maior que 425 a side bar deve sempre ser visivel, quando a tela é menor que 425 ai ela recebe falso ficando fechada, ao clicka no botao hambuer ela muda para verdadeiro e aparece o menu na tela inteira.

Falta fazer que aparece o X quando a side bar for true, e para isso precisamos mudar o css dela, ou seja atribuir outra classe para mudar a formatação, usando entao : [class]="menuAberto ? 'menu2' : 'menu'" quando ela recebe menu2 vira um X

### 15° Commit - Responsive part 2 SideBar

*** 
### 16° Passo

Quando clickamos em algum botao do menu ele carrega a pagina porém nao fecha side bar queremos q ele feche 
sendo assim temos que adicionar dentro de cada função de cada botao, chamaremos novamente ngOnInit, pois assim verifica qual o tamanho se o tamanho maior que 425px ela mantem a sidebar true, senao false e fecha ela. Sendo assim finalizado a SideBar.

Algumas Alterações em header

### 16° Commit - Responsive part 3 SideBar and header

*** 
### 17° Passo

Ajustes de resposividade no botao de header

Ajustes de resposividade em footer

Pequeno ajuste na margin em home component

### 17° Commit - Responsive part 4 Home and footer

*** 
### 18° Passo

side bar precisava arruma o hover de btn button

Ajustes de resposividade em varios components

### 18° Commit - Responsive part 5

*** 
### 19° Passo

Ajustes de resposividade em varios components

Finalizado component home

### 19° Commit - Responsive part 6 - Finished Home C

*** 
### 19° Passo

Ajustamos o componente youtube e criamos um menu para renderizar o conteudo da pagina, nesse momento o conteudo é pequeno mais futuramente deve ter bastante conteudo nessa pagina e será importante esse menu para rolagem mais rapida para onde desejamos.

scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

Isso só é possivel devido a função acima que encontra o id no html e direciona para o conteudo com o id indentificado.

fizemos um teste para resposividade apenas no mobile do component youtube, falta adicionar para os outros tamanhos.

### 20° Commit - Responsive part 7 - youtube component

*** 
### 21° Passo

