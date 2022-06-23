## Venture Labs Challenge
###### by: Bruno Bartolomeu

Visite a [aplicação aqui](https://venture-labs-challenge-brunocbart.vercel.app/)

##### Como rodar a aplicação

Para rodar a aplicação simplismente clone o repositório e rode o seguinte comando:

```
npm run dev
```

##### A aplicação

A aplicação é um form steps com slider, onde você pode preencher o form de acordo com a demanda dos inputs, renderizando uma mensagem de erro caso o input seja inválido.

Após enviar o form com um easter egg =)
você pode visualizar os novos clientes, se clicar na opção do menu "Lista de Clientes", em que são renderizadas todos os clientes cadastrados.

##### Processo de desenvolvimento

Durante o desenvolvimento dessa aplicação eu fiz utilização do figma para montar
alguns componentes de apoio e conseguir
alguns ícones.
Fiz o setup inicial com lint stylelint vite e typescript, também optei por não usar blibiotecas externas.


##### Testing

Eu não fiz testes nesse projeto, pois eu não sabia que o [vite](https://vitejs.dev/), ainda não tem suporte para rtl, achei algumas maneiras de configurar, mas, acabei optando por não fazer em questão do tempo.


##### bugs

Não sei se posso considerar o bug mas quando você diminui o tamanho da tela com o inspecionar elemento o slider do form se move, ainda tentando descobrir como evitar isso.

Tive problemas com uma ação de onSubmit onde um button type "button" "aparentemente" estava gerando uma ação de submit, e não consegui descobrir porque, acredito que o react achou que o button era de submit pois eu renderizava um button de submit logo após o clique nesse botão.
