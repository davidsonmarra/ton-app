![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<div align="center">
  <img align="center" alt="Logo do app" src="./assets/icon-ton.png" width=150>
</div>
<h4 align="center">Um app da ton, nós vendemos maquininhas!</h4>
<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#executar">Como executar</a> • 
 <a href="#dir">Organização de Diretórios</a> • 
 <a href="#libs">Bibliotecas Utilizadas</a> • 
 <a href="#resultado">Resultado</a> • 
 <a href="#doc">Documentação</a> • 
 <a href="#tests">Cobertura de Testes</a> • 
 <a href="#autor">Autor</a>
</p>

<h2 id="sobre">🧾 Sobre</h2>
<p>Este projeto foi desenvolvido em React Native como solução de um desafio técnico! 👨‍💻</p>
<p>Essa é uma aplicação de listagem de maquininhas, onde temos duas telas principais: a de listagem e a de detalhes. Além disso, o aplicativo possui documentação com o storybook e cobertura de testes.</p>

<h2 id="executar">💻 Como executar</h2>

> **Nota**: Certifique-se de ter concluído as instruções de
> [Configuração do Ambiente do React Native](https://reactnative.dev/docs/environment-setup) até a
> etapa "Criando um novo aplicativo", antes de prosseguir.

<h3>Passo 1: Iniciando o Metro Server</h3>

Primeiro, você precisará iniciar o **Metro**, o _bundler_ JavaScript que acompanha o React Native.

Para iniciar o Metro, execute o seguinte comando a partir da raiz do seu projeto React Native:

```bash
# usando npm
npm start

# OU usando Yarn
yarn start
```

<h3>Passo 2: Iniciando aplicação</h3>

Deixe o Metro Bundler rodando em _seu próprio_ terminal. Abra um _novo_ terminal a partir da raiz do
seu projeto React Native. Execute o seguinte comando para iniciar o seu aplicativo _Android_ ou
_iOS_:

<h4>Para Android</h4>

```bash
# usando npm
npm run android

# OU usando Yarn
yarn android
```

<h4>Para iOS</h4>

```bash
# usando npm
npm run ios

# OR usando Yarn
yarn ios
```

Se tudo estiver configurado corretamente, em breve você deverá ver o aplicativo rodando no seu
Emulador Android ou Simulador iOS, desde que você tenha configurado o emulador/simulador
corretamente.

Essa é uma forma de executar o aplicativo — você também pode executá-lo diretamente do Android
Studio e Xcode, respectivamente.

<h2 id="executar">📁 Organização de Diretórios</h2>

    .
    ├── ...
    ├── __tests__ # Arquivos de teste
    ├── __mocks__ # Arquivos de mock (api, tests, etc)
    ├── assets # Fontes e assets do README.md
    ├── src # Código fontes JavaScript
    │   └── @types # Definições dos tipos usados no projeto
    │   └── components # Componentes genériicos da aplicação
    │   └── global # Configurações globais
    |       └── services # Configurações da api
    |       └── styles # Configurações de estilo
    │   └── helpers # Pasta com úteis/constantes globais (validações, máscaras, etc)
    │   └── presentational # Apenas a parte visual dos componentes (screens)
    │   └── routes # Toda a configuração da rota
    |       └── screens # As telas/páginas (parte lógica)
    |       └── stacks # As stacks que irão compor as rotas
    |   └── server # Mock do servidor (miragejs)
    └── ...

<h2 id="libs">📚 Bibliotecas Utilizadas</h2>
<p>As principais bibliotecas externas utilizadas nesse projeto foram:</p>
<ul>
  <li>Styled Components: para estilização dos componentes e manutenção do estilo global da aplicação.</li>
  <li>React Navigation: para a criação da navegação e das rotas presentes no aplicativo.</li>
  <li>React Native Safe Area Context: para auxiliar no desenvolvimento da responsividade do app.</li>
  <li>React Native Vector Icons: usada para a criação dos ícones do aplicativo.</li>
  <li>ESLint: para manter a formatação de código padrão.</li>
  <li>Prettier: para formatar o código. Trabalha em conjunto com o ESlint para manter a formatação.</li>
  <li>Husky: ferramenta para configurar hooks do Git.</li>
  <li>Jest e React Native Testing Library: para a criação de testes unitários.</li>
  <li>Storybook: para a documentação dos principais componentes do projeto.</li>
  <li>Axios: para a realização da integração com as APIs.</li>
  <li>Mirage JS: para simular uma api para retornas as informações das maquininhas.</li>
  <li>React Native Skeleton Placeholder: usada na criação loading no formato skeleton.</li>
</ul>

<h2 id="resultado">📱 Resultado</h2>
<div align="center">


https://github.com/davidsonmarra/ton-app/assets/80720221/9b8e8fe9-bfa2-42e8-905b-ad9b0fea2509


</div>

<h2 id='doc'>📖 Documentação</h2>
<p>
  
  Toda a documentação foi desenvolvida com o Storybook. Para rodar, basta alterar a propriedade `RUN_STORYBOOK` no arquivo `env.json` com o app rodando.
  
</p>
<div align="center">

https://github.com/davidsonmarra/ton-app/assets/80720221/4e5937bd-fc99-42e4-a375-b4a6ffd510f0

</div>

<h2 id='tests'>⚙️ Cobertura de Testes<h2>
<div align="center">

https://github.com/davidsonmarra/ton-app/assets/80720221/03164c88-6ca7-48f9-b096-76f817a8ab6e

![tests-2](https://github.com/davidsonmarra/ton-app/assets/80720221/c6e60726-a9b6-4db3-a54b-41cbb0b709ca)

</div>

<h2 id="autor">👨‍💻 Autor</h2>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/davidsonmarra">
        <img src="https://github.com/davidsonmarra.png?size=100" width="100px;" alt="Davidson Marra"/><br>
        <sub>
          <b>Davidson Marra</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
