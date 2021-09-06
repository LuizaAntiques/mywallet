# Boas vindas ao repositório do projeto MyWallet!

Projeto TrybeWallet desenvolvido em agosto/2021 durante o curso de desenvolvimento web da Trybe.
Esse foi meu primeiro projeto utilizando redux e redux-thunk, e com ele pude entender melhor o funcionamento dessa biblioteca assim como aprofundar meus conhecimentos em React e operações assíncronas.

---


# Sumário

- [Boas vindas ao repositório do projeto Trybe Wallet!](#boas-vindas-ao-repositório-do-projeto-trybe-wallet)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Página de Login](#página-de-login)
    - [1. Crie uma página inicial de login com os seguintes campos e características:](#1-crie-uma-página-inicial-de-login-com-os-seguintes-campos-e-características)
    - [2. Realize as seguintes verificações nos campos de email, senha e botão:](#2-realize-as-seguintes-verificações-nos-campos-de-email-senha-e-botão)
    - [3. Utilize o Redux para salvar no estado global as informações da pessoa logada](#3-utilize-o-redux-para-salvar-no-estado-global-as-informações-da-pessoa-logada)
  - [Página da Carteira](#página-da-carteira)
    - [4. Crie uma página para sua carteira com as seguintes características:](#4-crie-uma-página-para-sua-carteira-com-as-seguintes-características)
    - [5. Crie um header para a página de carteira contendo as seguintes características:](#5-crie-um-header-para-a-página-de-carteira-contendo-as-seguintes-características)
  - [Formulário de adição de Despesa](#formulário-de-adição-de-despesa)
    - [6. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:](#6-desenvolva-um-formulário-para-adicionar-uma-despesa-contendo-as-seguintes-características)
    - [7. Implemente a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API:](#7-implemente-a-lógica-para-preencher-as-opções-do-campo-moedas-buscando-as-siglas-das-moedas-da-api)
    - [8. Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos](#8-desenvolva-a-opção-de-adicionar-despesa-na-sua-tabela-de-gastos)
  - [Tabela de Gastos](#tabela-de-gastos)
    - [9. Desenvolva uma tabela com os gastos contendo as seguintes características:](#9-desenvolva-uma-tabela-com-os-gastos-contendo-as-seguintes-características)
    - [10. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:](#10-crie-um-botão-para-deletar-uma-despesa-da-tabela-contendo-as-seguintes-características)
  - [Bônus](#bônus)
    - [11. Crie um botão para editar uma despesa da tabela contendo as seguintes características:](#11-crie-um-botão-para-editar-uma-despesa-da-tabela-contendo-as-seguintes-características)

---

# Habilidades
Neste projeto, as principais habilidades desenvolvidas são:

  * Criar um store Redux em aplicações React

  * Criar reducers no Redux em aplicações React

  * Criar actions no Redux em aplicações React

  * Criar dispatchers no Redux em aplicações React

  * Conectar Redux aos componentes React

  * Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---

# Entregáveis

## O que foi desenvolvido

Neste projeto precisei desenvolver uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:
  - Adicionar, remover e editar um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para real;

## Linter

Para garantir a qualidade do código, utilizei neste projeto o linter ESLint. Assim o código está alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

---

# Requisitos do projeto

---

### Página de Login

Crie uma página para que a pessoa usuária se identifique, com email e senha. Esta página deve ser a página inicial de seu aplicativo.

---

#### **1. Crie uma página inicial de login com os seguintes campos e características:**

  * A rota para esta página deve ser ‘/’.

  * Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo 
  `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

  * Crie um botão com o texto ‘Entrar’.

#### **2. Realize as seguintes verificações nos campos de email, senha e botão:**

  * O email está no formato válido, como 'alguem@alguem.com'.

  * A senha possui 6 ou mais caracteres.

  * Salve o email no estado da aplicação, com a chave ***email***, assim que a pessoa usuária logar.

  * A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

#### **3. Utilize o Redux para salvar no estado global as informações da pessoa logada**

  * Salve o email no estado da aplicação, com a chave email, assim que o usuário logar.

  * A rota deve ser mudada para `/carteira` quando o login for efetuado com sucesso.

---

### Página da Carteira

Crie uma página para gerenciar a carteira de gastos em diversas moedas, e que traga a despesa total em uma moeda só. Esta página deve ser renderizada por um componente chamado ***Wallet***.

---

#### **4. Crie uma página para sua carteira com as seguintes características:**

  * A rota para esta página deve ser `/carteira`.

  * O componente deve se chamar Wallet e estar localizado na pasta `src/pages` no arquivo `Wallet.js`.

#### **5. Crie um header para a página de carteira contendo as seguintes características:**

  * Um elemento que exiba o email da pessoa usuária que fez login.
    * Adicione o atributo `data-testid="email-field"`.

  * Um campo com a despesa total gerada pela lista de gastos.
    * Adicione o atributo `data-testid="total-field"`.
    * Inicialmente esse campo deve exibir o valor `0`.

  * Um campo que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.
    * Adicione o atributo `data-testid="header-currency-field"`.

---

### Formulário de adição de Despesa

 **Dica:** atente-se ao [formato sugerido pelo React](https://pt-br.reactjs.org/docs/forms.html) para criar formulários.

  ```
  <form>
    <label>
      Nome:
      <input type="text" name="name" />
    </label>
  </form>
  ```
 ---

#### **6. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:**

  * Um campo para adicionar valor da despesa.
    * O campo deverá ter a label `Valor`.

  * Um campo de texto para adicionar a descrição da despesa.
    * O campo deverá ter a label `Descrição`.

  * Um campo de select para adicionar em qual moeda será registrada a despesa.
    * O campo deverá ter a label `Moeda`.
    * O campo deverá ser um `<select>`.
    * As opções do select serão preenchidas através da consulta à API. Isso será feito em um requisito mais a frente. Nesse momento você pode deixar o `<select>` vazio.

  * Um campo para adicionar qual método de pagamento será utilizado.
    * O campo deverá ter a label `Método de pagamento`.
    * Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

  * Um campo para selecionar uma categoria (tag) para a despesa.
    * Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.
    * O campo deverá ter a label `Tag`.

#### **7. Implemente a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API:**

  * Ao entrar na página `/carteira`, você deverá fazer uma requisição para a API das moedas e preencher as opções do `<select>` de "Moedas" com os valores retornados. Utilizando as siglas das moedas.

  * As opções devem conter os valores: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'.
    * Esses valores devem vir da API através do endpoint: https://economia.awesomeapi.com.br/json/all.
    * Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo).

#### **8. Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos**

  * Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:
    * Os valores dos campos devem ser salvos no estado da aplicação, na chave ***expenses***, dentro de um array contendo todos gastos que serão adicionados:
      * O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.
      * Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

    * Após adicionar a despesa, atualize a soma total das despesas. Essa informação deve ficar no header dentro do elemento com `data-testid="total-field"`

---

### Tabela de Gastos

---

#### **9. Desenvolva uma tabela com os gastos contendo as seguintes características:**

  * A tabela deve possuir um cabeçalho **exatamente** com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.

  * Atente-se ao formato semântico da tabela. Utilize os elementos corretos para o cabeçalho, para as linhas e para as células.

  * A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave ***expenses*** que vem do reducer `wallet`.
    * O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente
    * Por padrão, o campo 'Moeda de conversão' exibirá 'Real'
    * Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).
    * Utilize sempre o formato `0.00` (número - ponto - duas casas decimais)

#### **10. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:**

  * O botão deve estar na linha da tabela e deve possuir `data-testid="delete-btn"`.

  * Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.

---

### Bônus

#### **11. Crie um botão para editar uma despesa da tabela contendo as seguintes características:**

  * O botão deve estar dentro da linha da tabela e deve possuir `data-testid="edit-btn"`.

  * Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.
    * O formulário deverá ter os mesmos `data-testid` do formulário de adicionar despesa. Você pode reaproveitá-lo.
    * O botão para submeter a despesa para edição deverá conter **exatamente** o texto "Editar despesa"
    **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.
