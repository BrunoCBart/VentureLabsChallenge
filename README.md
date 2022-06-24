## Venture Labs Challenge
###### by: Bruno Bartolomeu

Visite a [aplicação aqui](https://venture-labs-challenge-brunocbart.vercel.app/)

#### Como rodar a aplicação

Para rodar a aplicação simplismente clone o repositório e rode os seguinte comandos:

```
npm install ou npm i
```

```
npm run dev
```

#### A aplicação

A aplicação é um form steps com slider, onde você pode preencher o form de acordo com a demanda dos inputs, renderizando uma mensagem de erro caso o input seja inválido.

Após enviar o form com um easter egg =)
você pode visualizar os novos clientes, se clicar na opção do menu "Lista de Clientes", em que são renderizadas todos os clientes cadastrados.

#### Processo de desenvolvimento

Durante o desenvolvimento dessa aplicação eu fiz utilização do figma para montar
alguns componentes de apoio e conseguir
alguns ícones.
Fiz o setup inicial com lint stylelint vite e typescript, também optei por não usar blibiotecas externas, mas fiz uso do framework redux para adicionar o estado dos clientes e persisti-los no localstorage.


#### Testing

Eu não fiz testes nesse projeto, pois eu não sabia que o [vite](https://vitejs.dev/), ainda não tem suporte para rtl, achei algumas maneiras de configurar, mas, acabei optando por não fazer em questão do tempo.


#### bugs

(#FIXED)Quando o tamanho da tela é diminuido com o inspecionar elemento o slider do form se move, ainda tentando descobrir como evitar isso. 

(#WORKAROUND)Tive problemas com uma ação de onSubmit onde um button type "button" "aparentemente" estava gerando uma ação de submit, e não consegui descobrir porque, acredito que o react achou que o button era de submit pois eu renderizava um button de submit logo após o clique nesse botão.

(#FIXED)O redux-persist está perdendo alguns dados em algumas renderizações por algum motivo.
